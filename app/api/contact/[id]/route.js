// Import necessary modules and schemas
import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

import connectMongoDB from '@/lib/mongodb';
import Contact from '@/models/Contact';

export async function PATCH(request, { params }) {
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

    if (!token && token.role !== 'admin') {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { id } = params;
    const { status } = await request.json();

    await connectMongoDB();

    try {
        if (!['Pending', 'Contacted', 'Resolved'].includes(status)) {
            return NextResponse.json('Invalid status value', { status: 400 });
        }

        const updatedContact = await Contact.findByIdAndUpdate(id, { status }, { new: true });

        if (!updatedContact) {
            return NextResponse.json('Contact not found', { status: 404 });
        }

        return NextResponse.json(
            { message: 'Status updated', contact: updatedContact },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json('Failed to update status', { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

    if (!token && token.role !== 'admin') {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    const { id } = params;
    await connectMongoDB();
    try {
        const deletedContact = await Contact.findByIdAndDelete(id);
        if (!deletedContact) {
            return NextResponse.json({ error: 'Contact not found' }, { status: 404 });
        }
        return NextResponse.json(
            { message: 'Contact deleted', deleteContact: deletedContact },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
