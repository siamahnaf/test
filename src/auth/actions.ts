"use server";
import { signIn as authSignIn, signOut as authSignOut } from ".";


export const signIn = async () => {
    await authSignIn("login", {
        email: "siam@tumiami.com",
        password: "2347"
    });
}

export const signOut = async () => {
    await authSignOut();
}