import { NextResponse } from 'next/server';

import connectMongoDB from '@/lib/mongodb';
import Blog from '@/models/Blog';

export async function GET() {
    await connectMongoDB();

    const blogs = await Blog.find();

    return NextResponse.json({ blogs });
}
export async function POST(request) {
    try {
        // Extract data from the request body
        const { title, blog_cover_img, author_name, read_time, blog_content } =
            await request.json();
        await connectMongoDB();

        // Create a new blog post
        const newBlogPost = new Blog({
            title,
            blog_cover_img,
            author_name,
            read_time,
            blog_content,
        });
        const savedBlogPost = await newBlogPost.save();

        return NextResponse.json({ success: true, blogPost: savedBlogPost });
    } catch (error) {
        return NextResponse.json({ success: false, error: error.message }, 500);
    }
}
