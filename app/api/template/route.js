import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import { z } from 'zod';

import connectMongoDB from '@/lib/mongodb';
import { templateSchema } from '@/lib/validation';
import Template from '@/models/Template';

export async function GET() {
    await connectMongoDB();

    const allTemplates = await Template.find();

    return NextResponse.json({ allTemplates }, { status: 200 });
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
        const validatedData = templateSchema.parse(requestData);

        await connectMongoDB();

        // Create a new Testimonial
        const newTemplate = new Template(validatedData);
        const savedTemplate = await newTemplate.save();

        return NextResponse.json(
            {
                success: true,
                template: savedTemplate,
                message: 'Template added successfully!',
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
