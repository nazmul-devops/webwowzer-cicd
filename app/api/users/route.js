import { NextResponse } from 'next/server';

import connectMongoDB from '@/lib/mongodb';
import User from '@/models/UserModel';

export async function GET() {
    await connectMongoDB();

    const users = await User.find();

    return NextResponse.json({ users });
}

export async function POST(request) {
    try {
        const { name, email, password } = await request.json();
        await connectMongoDB();

        await User.create({
            name,
            email,
            password,
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
    const id = request.nextUrl.searchParams.get('id');

    await connectMongoDB();
    await User.findByIdAndDelete(id);

    return NextResponse.json({ message: 'User deleted' }, { status: 200 });
}
