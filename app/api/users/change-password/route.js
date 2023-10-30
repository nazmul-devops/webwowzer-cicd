import bcrypt from 'bcryptjs';
import { getToken } from 'next-auth/jwt';
import { NextResponse } from 'next/server';

import connectMongoDB from '@/lib/mongodb';
import User from '@/models/User';

export async function GET() {
    return NextResponse.json({ message: 'Not Allowed' }, { status: 405 });
}

export async function PATCH(request) {
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

    if (!token) {
        return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const id = request.nextUrl.searchParams.get('id');

    const { current_password, new_password } = await request.json();

    try {
        await connectMongoDB();
        const user = await User.findById(id);

        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        const passwordIsValid = await bcrypt.compareSync(current_password, user.password);

        if (!passwordIsValid) {
            return NextResponse.json({ message: 'Current Password is incorrect' }, { status: 400 });
        }

        // Hash the password
        const salt = bcrypt.genSaltSync(10); // Generate a salt
        const hashedPassword = bcrypt.hashSync(new_password, salt);

        await User.findByIdAndUpdate(id, { password: hashedPassword });

        return NextResponse.json({ message: 'Password Changed Successfully' }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ message: 'Something Went Wrong' }, { status: 500 });
    }
}
