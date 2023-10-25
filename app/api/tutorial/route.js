import { NextResponse } from 'next/server';

import connectMongoDB from '@/lib/mongodb';
import { tutorialSchema } from '@/lib/validation';
import Tutorial from '@/models/Tutorial';

export async function GET() {
    await connectMongoDB();

    const tutorials = await Tutorial.find().sort({ _id: -1 });

    return NextResponse.json({ tutorials }, { status: 200 });
}

export async function POST(request) {
    try {
        // Extract data from the request body
        const requestData = await request.json();

        // Validate the request data against the schema
        const validatedData = tutorialSchema.parse(requestData);

        await connectMongoDB();

        // Create a new blog post
        const newTutorial = new Tutorial(validatedData);
        const savedTutorial = await newTutorial.save();

        return NextResponse.json({
            success: true,
            tutorial: savedTutorial,
            message: 'Tutorial created successfully',
        });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
