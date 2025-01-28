import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

export const AuthOptions: NextAuthOptions = {
    secret: process.env.NEXT_AUTH_SECRET,
    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Enter your email" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error('Please enter email and password');
                }

                // Replace this with your actual user authentication logic
                const user = {
                    id: '1',
                    email: "admin@gmail.com",
                    password: "admin",
                    username: "admin",
                    role: "admin"
                };

                if (user.email === credentials.email && user.password === credentials.password) {
                    return {
                        id: user.id,
                        email: user.email,
                        username: user.username,
                        password: user.password,
                        role: user.role
                    };
                }
                throw new Error('Invalid email or password');
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.email = user.email;
                token.username = user.username;
                token.role = user.role
            }
            return token;
        },
        async session({ session, token }) {
            session.user.username = token.username;
            session.user.email = token.email;
            session.user.role = token.role
            return session;
        }
    },
    pages: {
        signIn: '/auth/signin',
        error: '/auth/error',
    },
    session: {
        strategy: 'jwt',
    }
}