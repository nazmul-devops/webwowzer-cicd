import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

import connectMongoDB from '@/lib/mongodb';
import { emailSubscriptionSchema } from '@/lib/validation';
import EmailSubscription from '@/models/EmailSubscription';

export async function GET(request) {
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

    if (!token && token.role !== 'admin') {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    await connectMongoDB();

    const allEmailSubscriptons = await EmailSubscription.find();

    return NextResponse.json({ allEmailSubscriptons }, { status: 200 });
}

export async function POST(request) {
    try {
        // Extract data from the request body
        const requestData = await request.json();

        // Validate the request data against the schema
        const validatedData = emailSubscriptionSchema.parse(requestData);

        await connectMongoDB();

        // check if email already exists
        const emailExists = await EmailSubscription.findOne({
            email: validatedData.email,
        });

        if (emailExists) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'You have already subscribed to our newsletter!',
                },
                { status: 409 }
            );
        }

        // Create a new blog post
        const newEmailSubscription = new EmailSubscription(validatedData);
        const savedEmailSubscription = await newEmailSubscription.save();

        return NextResponse.json(
            {
                success: true,
                emailSubscription: savedEmailSubscription,
                message: 'Thank you for subscribing to our newsletter!',
            },
            { status: 200 }
        );
    } catch (error) {
        if (error.issues[0].message === 'Invalid email') {
            return NextResponse.json(
                {
                    success: false,
                    message: 'Please enter a valid email address.',
                },
                { status: 400 }
            );
        }
        return NextResponse.json(
            error,
            { message: 'An Error Occour While Registering User' },
            { status: 500 }
        );
    }
}
