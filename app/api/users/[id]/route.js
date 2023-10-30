import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

import connectMongoDB from '@/lib/mongodb';
import { userSchema } from '@/lib/validation';
import User from '@/models/User';

export async function PUT(request, { params }) {
    const { id } = params;
    const { first_name, last_name, company_name, phone_number } = await request.json();

    try {
        const validateData = userSchema.parse({
            first_name,
            last_name,
            company_name,
            phone_number,
        });

        await connectMongoDB();

        const updatedUserInfo = await User.findByIdAndUpdate(id, validateData, { new: true });

        if (!updatedUserInfo) {
            return NextResponse.error('User not found', { status: 404 });
        }

        return NextResponse.json(
            { message: 'User Info updated Successfully', user: updatedUserInfo },
            { status: 200 }
        );
    } catch (err) {
        return NextResponse.json('Something Went Wrong', { status: 500 });
    }
}

export async function GET(request, { params }) {
    const { id } = params;

    await connectMongoDB();
    const user = await User.findOne({ _id: id });
    return NextResponse.json({ user }, { status: 200 });
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
        const updatedUserInfo = await User.findByIdAndUpdate(id, { active }, { new: true });

        if (!updatedUserInfo) {
            return NextResponse.error('User not found', { status: 404 });
        }

        return NextResponse.json(
            { message: 'Active status updated', user: updatedUserInfo },
            { status: 200 }
        );
    } catch (err) {
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
        const deletedUser = await User.findByIdAndDelete(id);

        if (!deletedUser) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'User deleted', user: deletedUser }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'failed to delete user' }, { status: 500 });
    }
}
