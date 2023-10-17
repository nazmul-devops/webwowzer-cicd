import { getServerSession } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions = {
    session: {
        strategy: 'jwt',
    },

    secret: process.env.NEXTAUTH_SECRET,

    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {},

            async authorize(credentials, request) {
                console.log('credentials', credentials);
                console.log('request', request);

                const user = { id: 1, name: 'Admin', email: 'smith@gmail.com' };

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
