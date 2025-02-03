import { createHydrationHelpers } from "@trpc/react-query/rsc";
import { cache } from "react";

//Query Client
import { makeQueryClient } from "./query-client";

//App router
import { appRouter } from "@/server";
import { createCallerFactory } from "@/server/trpc/server";

//Context
import { createContext } from "@/server/trpc/context";

export const getQueryClient = cache(makeQueryClient);
const caller = createCallerFactory(appRouter)(createContext);

export const { trpc, HydrateClient } = createHydrationHelpers<typeof appRouter>(
    caller,
    getQueryClient,
);