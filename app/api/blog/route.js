import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

import connectMongoDB from '@/lib/mongodb';
import { blogSchema } from '@/lib/validation';
import Blog from '@/models/Blog';

export async function GET() {
    await connectMongoDB();

    const blogs = await Blog.find().sort({ _id: -1 });

    return NextResponse.json({ blogs }, { status: 200 });
}

export async function POST(request) {
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

    if (!token || token.role !== 'admin') {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    try {
        // Extract data from the request body
        const requestData = await request.json();

        // Validate the request data against the schema
        const validatedData = blogSchema.parse(requestData);

        await connectMongoDB();

        // Create a new blog post
        const newBlogPost = new Blog(validatedData);
        const savedBlogPost = await newBlogPost.save();

        return NextResponse.json({
            success: true,
            blogPost: savedBlogPost,
            message: 'Blog created successfully',
        });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
