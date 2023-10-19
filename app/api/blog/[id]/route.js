import { NextResponse } from 'next/server';

import connectMongoDB from '@/lib/mongodb';
import Blog from '@/models/Blog';
import { ObjectId } from 'mongodb';

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
    const blog = await Blog.aggregate([
        {
            $match: { _id: ObjectId(id) },
        },
        {
            $lookup: {
                from: 'blogs',
                let: { blogId: '$_id' },
                pipeline: [
                    {
                        $match: {
                            $and: [
                                {
                                    $expr: {
                                        $ne: ['$_id', '$$blogId'],
                                    },
                                },
                                {
                                    $expr: {
                                        $eq: ['$active', true],
                                    },
                                },
                            ],
                        },
                    },
                    {
                        $sample: { size: 2 },
                    },
                ],
                as: 'more',
            },
        },
        {
            $project: {
                _id: 1,
                title: 1,
                blog_cover_img: 1,
                author_name: 1,
                read_time: 1,
                blog_content: 1,
                created_at: 1,
                active: 1,
                more: {
                    _id: 1,
                    title: 1,
                    blog_cover_img: 1,
                    author_name: 1,
                    active: 1,
                    created_at: 1,
                },
            },
        },
    ]);
    return NextResponse.json({ blog: blog[0] }, { status: 200 });
}

export async function PATCH(request, { params }) {
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
