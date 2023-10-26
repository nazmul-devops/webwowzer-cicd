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
                updatedSession.user.first_name = token.first_name;
                updatedSession.user.last_name = token.last_name;
                updatedSession.user.email = token.email;
                updatedSession.user.company_name = token.company_name;
                updatedSession.user.phone_number = token.phone_number;
                updatedSession.user.role = token.role;
            }

            return updatedSession;
        },

        async jwt({ token, user }) {
            const updatedToken = { ...token }; // Create a copy of the token object

            if (user?.role) {
                updatedToken.id = user._id;
                updatedToken.first_name = user.first_name;
                updatedToken.last_name = user.last_name;
                updatedToken.email = user.email;
                updatedToken.company_name = user.company_name;
                updatedToken.phone_number = user.phone_number;
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
