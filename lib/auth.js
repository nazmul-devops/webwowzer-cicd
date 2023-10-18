import bcrypt from 'bcryptjs';
import { getServerSession } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import User from '@/models/User';
import connectMongoDB from './mongodb';

export const authOptions = {
    session: {
        strategy: 'jwt',
    },

    secret: process.env.NEXTAUTH_SECRET,

    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {},

            async authorize(credentials) {
                await connectMongoDB();

                const { email, password } = credentials;

                const user = await User.findOne({ email });

                if (!user) {
                    return null;
                }

                const passwordIsValid = await bcrypt.compareSync(password, user.password);

                if (!passwordIsValid) {
                    return null;
                }

                if (user) {
                    return user;
                }

                return null;
            },
        }),
    ],

    pages: {
        signIn: '/login',
    },
};

export const getAuthSession = () => getServerSession(authOptions);
