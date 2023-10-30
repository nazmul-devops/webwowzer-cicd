import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

import connectMongoDB from '@/lib/mongodb';
import { contactSchema } from '@/lib/validation';
import Contact from '@/models/Contact';

export async function GET(request) {
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

    if (!token && token.role !== 'admin') {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    try {
        await connectMongoDB();

        // Fetch contact data from the database
        const contacts = await Contact.find().sort({ _id: -1 });

        return NextResponse.json({ contacts }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        // Extract data from the request body
        const requestData = await request.json();

        // Validate the request data against the schema
        contactSchema.parse(requestData);

        await connectMongoDB();

        // Create a new contact entry
        const newContact = new Contact(requestData);
        const savedContact = await newContact.save();

        return NextResponse.json({
            success: true,
            contact: savedContact,
            message: 'Contact form submitted successfully',
        });
    } catch (error) {
        return NextResponse.json({ error }, { status: 400 });
    }
}
