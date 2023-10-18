import { NextResponse } from 'next/server';

import connectMongoDB from '@/lib/mongodb';
import Blog from '@/models/BlogModel';

export async function GET() {
    await connectMongoDB();

    const blogs = await Blog.find();

    return NextResponse.json({ blogs });
}
export async function POST(request) {
    try {
        // Extract data from the request body
        const { title, content, author, image, authorName, estimatedReadingTime } =
            await request.json();
        await connectMongoDB();

        // Create a new blog post
        const newBlogPost = new Blog({
            title,
            content,
            author,
            image,
            authorName,
            estimatedReadingTime,
        });

        // Save the new blog post to the database
        const savedBlogPost = await newBlogPost.save();

        return NextResponse.json({ success: true, blogPost: savedBlogPost });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, 500);
    }
}
