import { initTRPC } from "@trpc/server";

const t = initTRPC.create();

export const mergeRourters = t.mergeRouters;
export const middleware = t.middleware;
export const publicProcedure = t.procedure;
export const router = t.router;
