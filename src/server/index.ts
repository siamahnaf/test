import { router } from "./trpc/server";

//Routers
import { userRouter } from "./user/user.router";

export const appRouter = router({
    users: userRouter
});

export type AppRouter = typeof appRouter;