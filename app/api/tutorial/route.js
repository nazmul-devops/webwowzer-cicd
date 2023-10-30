import { getToken } from 'next-auth/jwt';
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
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

    if (!token && token.role !== 'admin') {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    function getVideoId(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);

        return match && match[2].length === 11 ? match[2] : null;
    }

    try {
        // Extract data from the request body
        const requestData = await request.json();

        // change requestData and make youtube video url to embed url
        const { video_url } = requestData;

        const videoId = getVideoId(video_url);

        if (videoId) {
            requestData.video_url = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
            requestData.thumbnail_img = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
        }

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
