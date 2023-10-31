import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';
import { z } from 'zod';

import connectMongoDB from '@/lib/mongodb';
import { templateSchema } from '@/lib/validation';
import Template from '@/models/Template';

export async function PUT(request, { params }) {
    const { id } = params;
    const requestedData = await request.json();

    try {
        const validateData = templateSchema.parse(requestedData);
        await connectMongoDB();

        const updatedTemplate = await Template.findByIdAndUpdate(id, validateData, {
            new: true,
        });

        if (!updatedTemplate) {
            return NextResponse.error('Template not found', { status: 404 });
        }

        return NextResponse.json(
            {
                message: 'Template updated successfully',
                template: updatedTemplate,
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
        return NextResponse.json({ error }, { status: 500 });
    }
}

export async function GET(request, { params }) {
    const { id } = params;

    await connectMongoDB();
    const template = await Template.findOne({ _id: id });

    return NextResponse.json({ template }, { status: 200 });
}

export async function PATCH(request, { params }) {
    const { id } = params;
    const { active } = await request.json();

    await connectMongoDB();

    try {
        const updatedTemplate = await Template.findByIdAndUpdate(id, { active }, { new: true });

        if (!updatedTemplate) {
            return NextResponse.error('Template not found', { status: 404 });
        }

        return NextResponse.json(
            { message: 'Active status updated', template: updatedTemplate },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.error('Failed to update active status', { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

    if (!token && token.role !== 'admin') {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    const { id } = params;

    // Connect to your MongoDB database
    await connectMongoDB();

    try {
        // Use MongoDB's `findByIdAndDelete` to delete
        const deletedTemplate = await Template.findByIdAndDelete(id);

        if (!deletedTemplate) {
            return NextResponse.error('Template not found', { status: 404 });
        }

        return NextResponse.json(
            { message: 'Template deleted successfully', template: deletedTemplate },
            { status: 204 }
        );
    } catch (error) {
        return NextResponse.error('Failed to delete the template', { status: 500 });
    }
}
