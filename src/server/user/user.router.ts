import { procedure, router } from "../trpc/server";

export const userRouter = router({
    getUser: procedure.query(() => {
        return {
            id: "trpc"
        }
    })
});