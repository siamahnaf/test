import { procedure, router } from "../trpc/server";

export const userRouter = router({
    getUser: procedure.query(({ ctx }) => {
        return {
            id: "trpc",
            namefromSession: ctx.user.user?.name
        }
    })
});