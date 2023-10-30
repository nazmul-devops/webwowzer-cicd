import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import { z } from 'zod';

import connectMongoDB from '@/lib/mongodb';
import { testimonialSchema } from '@/lib/validation';
import Testimonial from '@/models/Testimonial';

export async function GET() {
    await connectMongoDB();

    const allTestimonials = await Testimonial.find();

    return NextResponse.json({ allTestimonials }, { status: 200 });
}

export async function POST(request) {
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

    if (!token && token.role !== 'admin') {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    try {
        // Extract data from the request body
        const requestData = await request.json();

        // Validate the request data against the schema
        const validatedData = testimonialSchema.parse(requestData);

        await connectMongoDB();

        // Create a new Testimonial
        const newTestimonial = new Testimonial(validatedData);
        const savedTestimonial = await newTestimonial.save();

        return NextResponse.json(
            {
                success: true,
                testimonial: savedTestimonial,
                message: 'Testimonial added successfully!',
            },
            { status: 200 }
        );
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                {
                    success: false,
                    message: error.message,
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
