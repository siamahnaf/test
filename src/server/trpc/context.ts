import { auth } from "@/auth";

export const createContext = async () => {
    const user = await auth();
    if (user) {
        return {
            user: user,
        }
    } else {
        return {
            user: null
        }
    }
}

export type Context = Awaited<ReturnType<typeof createContext>>;