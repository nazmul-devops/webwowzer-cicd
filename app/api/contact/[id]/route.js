// Import necessary modules and schemas

import connectMongoDB from '@/lib/mongodb';
import Contact from '@/models/Contact';
import { NextResponse } from 'next/server';

export async function PATCH(request, { params }) {
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
