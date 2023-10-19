import { NextResponse } from 'next/server';

import connectMongoDB from '@/lib/mongodb';
import Blog from '@/models/Blog';

export async function PUT(request, { params }) {
    const { id } = params;
    const {
        newTitle: title,
        newBlogContent: blog_content,
        newAuthorName: author_name,
    } = await request.json();

    await connectMongoDB();

    try {
        const updatedBlog = await Blog.findByIdAndUpdate(
            id,
            { title, blog_content, author_name },
            { new: true }
        );

        if (!updatedBlog) {
            return NextResponse.error('Blog not found', { status: 404 });
        }

        return NextResponse.json(
            { message: 'Blog updated', blogPost: updatedBlog },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.error('Failed to update blog', { status: 500 });
    }
}

export async function GET(request, { params }) {
    const { id } = params;

    await connectMongoDB();
    const blog = await Blog.findOne({ _id: id });
    return NextResponse.json({ blog }, { status: 200 });
}
