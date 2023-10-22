import bcrypt from 'bcryptjs';
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
    const { id } = await request.json();

    await connectMongoDB();
    await User.findByIdAndDelete(id);

    return NextResponse.json({ message: 'User deleted Successfully' }, { status: 200 });
}
