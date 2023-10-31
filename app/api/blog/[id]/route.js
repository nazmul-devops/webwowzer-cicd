import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

import connectMongoDB from '@/lib/mongodb';
import { blogSchema } from '@/lib/validation';
import Blog from '@/models/Blog';

export async function PUT(request, { params }) {
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

    if (!token && token.role !== 'admin') {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { id } = params;
    const { title, blog_content, author_name, blog_cover_img, read_time } = await request.json();

    try {
        const validateData = blogSchema.parse({
            title,
            blog_content,
            author_name,
            blog_cover_img,
            read_time: parseInt(read_time, 10),
        });
        await connectMongoDB();

        const updatedBlog = await Blog.findByIdAndUpdate(id, validateData, { new: true });

        if (!updatedBlog) {
            return NextResponse.error('Blog not found', { status: 404 });
        }

        return NextResponse.json(
            { message: 'Blog updated', blogPost: updatedBlog },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}

export async function GET(request, { params }) {
    const { id } = params;

    await connectMongoDB();
    const blog = await Blog.findOne({ _id: id });

    return NextResponse.json({ blog }, { status: 200 });
}

export async function PATCH(request, { params }) {
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

    if (!token && token.role !== 'admin') {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    const { id } = params;
    const { active } = await request.json();

    await connectMongoDB();

    try {
        const updatedBlog = await Blog.findByIdAndUpdate(id, { active }, { new: true });

        if (!updatedBlog) {
            return NextResponse.error('Blog not found', { status: 404 });
        }

        return NextResponse.json(
            { message: 'Active status updated', blogPost: updatedBlog },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.error('Failed to update active status', { status: 500 });
    }
}

// Import necessary modules and dependencies

export async function DELETE(request, { params }) {
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

    if (!token && token.role !== 'admin') {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    const { id } = params;

    // Connect to your MongoDB database
    await connectMongoDB();

    try {
        // Use MongoDB's `findByIdAndDelete` to delete the blog post
        const deletedBlog = await Blog.findByIdAndDelete(id);

        if (!deletedBlog) {
            return NextResponse.error('Blog not found', { status: 404 });
        }

        return NextResponse.json(
            { message: 'Blog deleted', blogPost: deletedBlog },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.error('Failed to delete the blog', { status: 500 });
    }
}
