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
export async function PATCH(request, { params }) {
    const { id } = params;
    const { active } = await request.json();

    await connectMongoDB();

    try {
        const updatedUser = await User.findByIdAndUpdate(id, { active }, { new: true });

        if (!updatedUser) {
            return NextResponse.error('User not found', { status: 404 });
        }

        return NextResponse.json(
            { message: 'Active status updated', user: updatedUser },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.error('Failed to update active status', { status: 500 });
    }
}
export async function DELETE(request, { params }) {
    const { id } = params;

    // Connect to your MongoDB database
    await connectMongoDB();

    try {
        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'User deleted', user: deletedUser }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'failed to delete user' }, { status: 500 });
    }
}
