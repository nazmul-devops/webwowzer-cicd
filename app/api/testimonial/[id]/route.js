import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import { z } from 'zod';

import connectMongoDB from '@/lib/mongodb';
import { testimonialSchema } from '@/lib/validation';
import Testimonial from '@/models/Testimonial';

export async function PUT(request, { params }) {
    const { id } = params;
    const requestedData = await request.json();

    try {
        const validateData = testimonialSchema.parse(requestedData);
        await connectMongoDB();

        const updatedTestimonial = await Testimonial.findByIdAndUpdate(id, validateData, {
            new: true,
        });

        if (!updatedTestimonial) {
            return NextResponse.error('Testimonial not found', { status: 404 });
        }

        return NextResponse.json(
            {
                message: 'Testimonial updated successfully',
                testimonial: updatedTestimonial,
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
        return NextResponse.json({ error }, { status: 500 });
    }
}

export async function GET(request, { params }) {
    const { id } = params;

    await connectMongoDB();
    const testimonial = await Testimonial.findOne({ _id: id });

    return NextResponse.json({ testimonial }, { status: 200 });
}

export async function PATCH(request, { params }) {
    const { id } = params;
    const { active } = await request.json();

    await connectMongoDB();

    try {
        const updatedTestimonial = await Testimonial.findByIdAndUpdate(
            id,
            { active },
            { new: true }
        );

        if (!updatedTestimonial) {
            return NextResponse.error('Testimonial not found', { status: 404 });
        }

        return NextResponse.json(
            { message: 'Active status updated', testimonial: updatedTestimonial },
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
        const deletedTestimonial = await Testimonial.findByIdAndDelete(id);

        if (!deletedTestimonial) {
            return NextResponse.error('Testimonial not found', { status: 404 });
        }

        return NextResponse.json(
            { message: 'Testimonial deleted successfully', testimonial: deletedTestimonial },
            { status: 204 }
        );
    } catch (error) {
        return NextResponse.error('Failed to delete the testimonial', { status: 500 });
    }
}
