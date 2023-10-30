import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

import connectMongoDB from '@/lib/mongodb';
import { emailSubscriptionSchema } from '@/lib/validation';
import EmailSubscription from '@/models/EmailSubscription';

export async function PUT(request, { params }) {
    const { id } = params;
    const { email } = await request.json();

    try {
        const validateData = emailSubscriptionSchema.parse({
            email,
        });
        await connectMongoDB();

        const updatedEmailSubscription = await EmailSubscription.findByIdAndUpdate(
            id,
            validateData,
            { new: true }
        );

        if (!updatedEmailSubscription) {
            return NextResponse.error('Email not found', { status: 404 });
        }

        return NextResponse.json(
            { message: 'Email updated', emailSubscription: updatedEmailSubscription },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}

export async function GET(request, { params }) {
    const { id } = params;

    await connectMongoDB();
    const emailSubscription = await EmailSubscription.findOne({ _id: id });

    return NextResponse.json({ emailSubscription }, { status: 200 });
}

export async function PATCH(request, { params }) {
    const { id } = params;
    const { active } = await request.json();

    await connectMongoDB();

    try {
        const updatedEmailSubscription = await EmailSubscription.findByIdAndUpdate(
            id,
            { active },
            { new: true }
        );

        if (!updatedEmailSubscription) {
            return NextResponse.error('Email not found', { status: 404 });
        }

        return NextResponse.json(
            { message: 'Active status updated', emailSubscription: updatedEmailSubscription },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.error('Failed to update active status', { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

    if (!token && token.role !== 'admin') {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    const { id } = params;

    // Connect to your MongoDB database
    await connectMongoDB();

    try {
        // Use MongoDB's `findByIdAndDelete` to delete
        const deletedEmailSubscription = await EmailSubscription.findByIdAndDelete(id);

        if (!deletedEmailSubscription) {
            return NextResponse.error('Email not found', { status: 404 });
        }

        return NextResponse.json(
            { message: 'Email deleted', blogPost: deletedEmailSubscription },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.error('Failed to delete the tutorial', { status: 500 });
    }
}
