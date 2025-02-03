import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials";

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [
        Credentials({
            id: "login",
            name: "login",
            credentials: {
                email: {},
                password: {}
            },
            authorize: async (credentials) => {
                console.log("credentials", credentials);
                const user = {
                    id: (Math.floor(Math.random() * 100) + 1).toString(),
                    name: "Siam Ahnaf",
                    email: "Email",
                }
                return user;
            }
        })
    ],
    pages: {
        signIn: "/login"
    }
})