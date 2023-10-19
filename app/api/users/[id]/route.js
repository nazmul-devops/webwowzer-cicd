import { NextResponse } from 'next/server';

import connectMongoDB from '@/lib/mongodb';
import User from '@/models/User';

export async function PUT(request, { params }) {
    const { id } = params;
    const { newName: name, newEmail: email } = await request.json();

    await connectMongoDB();
    const newUser = await User.findByIdAndUpdate(id, { name, email });
    return NextResponse.json({ message: 'User updated', user: newUser }, { status: 200 });
}

export async function GET(request, { params }) {
    const { id } = params;

    await connectMongoDB();
    const user = await User.findOne({ _id: id });
    return NextResponse.json({ user }, { status: 200 });
}
