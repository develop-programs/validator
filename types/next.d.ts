/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            id: string
            username: string
            password: string
            role: string
        } & DefaultSession["user"]
    }
    interface User {
        id: string
        username: string
        password: string
        role: string
    }
}
declare module "next-auth/jwt" {
    interface JWT {
        id: string
        username: string
        password: string
        role: string
    }
}