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
                const { email, password } = credentials;

                await connectMongoDB();

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

    callbacks: {
        async session({ session, token }) {
            const updatedSession = { ...session }; // Create a copy of the session object

            if (updatedSession.user) {
                updatedSession.user.id = token.id;
                updatedSession.user.name = token.name;
                updatedSession.user.email = token.email;
                updatedSession.user.role = token.role;
            }

            return updatedSession;
        },

        async jwt({ token, user }) {
            const updatedToken = { ...token }; // Create a copy of the token object

            if (user?.role) {
                updatedToken.id = user._id;
                updatedToken.name = user.name;
                updatedToken.email = user.email;
                updatedToken.role = user.role;
            }

            return updatedToken;
        },
    },

    pages: {
        signIn: '/login',
    },
};

export const getAuthSession = () => getServerSession(authOptions);
