import { NextResponse } from 'next/server';

import connectMongoDB from '@/lib/mongodb';
import { tutorialSchema } from '@/lib/validation';
import Tutorial from '@/models/Tutorial';

export async function PUT(request, { params }) {
    const { id } = params;
    const { title, thumbnail_img, video_url, duration } = await request.json();

    try {
        const validateData = tutorialSchema.parse({
            title,
            thumbnail_img,
            video_url,
            duration,
        });

        await connectMongoDB();

        const updatedTutorial = await Tutorial.findByIdAndUpdate(id, validateData, { new: true });

        if (!updatedTutorial) {
            return NextResponse.error('Tutorial not found', { status: 404 });
        }

        return NextResponse.json(
            { message: 'Tutorial updated', tutorials: updatedTutorial },
            { status: 200 }
        );
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error }, { status: 500 });
    }
}

export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const tutorial = await Tutorial.findOne({ _id: id });

    return NextResponse.json({ tutorial }, { status: 200 });
}

export async function PATCH(request, { params }) {
    const { id } = params;
    const { active } = await request.json();

    await connectMongoDB();

    try {
        const updatedTutorial = await Tutorial.findByIdAndUpdate(id, { active }, { new: true });

        if (!updatedTutorial) {
            return NextResponse.error('Tutorial not found', { status: 404 });
        }

        return NextResponse.json(
            { message: 'Active status updated', tutorial: updatedTutorial },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.error('Failed to update active status', { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    console.log('ok');
    const { id } = params;
    console.log(id);

    // Connect to your MongoDB database
    await connectMongoDB();

    try {
        // Use MongoDB's `findByIdAndDelete` to delete
        const deletedTutorial = await Tutorial.findByIdAndDelete(id);

        if (!deletedTutorial) {
            return NextResponse.error('Tutorial not found', { status: 404 });
        }

        return NextResponse.json(
            { message: 'Tutorial deleted', blogPost: deletedTutorial },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.error('Failed to delete the tutorial', { status: 500 });
    }
}
