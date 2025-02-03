import { initTRPC, TRPCError } from "@trpc/server";

//Context
import { Context } from "./context";

//Initialize TRPC
const t = initTRPC.context<Context>().create();

//Router
export const router = t.router;

//Procedure
export const procedure = t.procedure.use(
    async function isAuthed(opts) {
        const { ctx } = opts;
        if (!ctx.user) {
            throw new TRPCError({ code: "UNAUTHORIZED", message: "Unauthorized request. Please login" })
        }
        return opts.next({
            ctx: {
                user: ctx.user
            }
        })
    }
);

export const createCallerFactory = t.createCallerFactory;


