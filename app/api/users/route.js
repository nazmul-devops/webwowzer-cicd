import bcrypt from 'bcryptjs';
import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

import connectMongoDB from '@/lib/mongodb';
import User from '@/models/User';

export async function GET() {
    await connectMongoDB();

    const users = await User.find();

    return NextResponse.json({ users });
}

export async function POST(request) {
    try {
        const {
            firstName,
            lastName,
            country,
            city,
            region,
            postalCode,
            email,
            phoneNumber,
            password,
        } = await request.json();
        await connectMongoDB();

        // Check if a user with the same email or phone number already exists
        const existingUser = await User.findOne({
            $or: [{ email }, { phone_number: phoneNumber }],
        });

        if (existingUser) {
            return NextResponse.json(
                { message: 'Email or phone number is already in use' },
                { status: 400 }
            );
        }

        // Hash the password
        const salt = bcrypt.genSaltSync(10); // Generate a salt
        const hashedPassword = bcrypt.hashSync(password, salt);

        await User.create({
            first_name: firstName,
            last_name: lastName,
            country,
            city,
            region,
            postal_code: postalCode,
            email,
            phone_number: phoneNumber,
            password: hashedPassword,
        });

        return NextResponse.json({ message: 'User Registered Successfully' }, { status: 201 });
    } catch (error) {
        return NextResponse.json(
            { message: 'An Error Occour While Registering User' },
            { status: 500 }
        );
    }
}

export async function DELETE(request) {
    // const id = request.nextUrl.searchParams.get('id');
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

    if (!token && token.role !== 'admin') {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }
    const { id } = await request.json();

    await connectMongoDB();
    await User.findByIdAndDelete(id);

    return NextResponse.json({ message: 'User deleted Successfully' }, { status: 200 });
}
