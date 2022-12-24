import { createHTTPHandler } from "@trpc/server/adapters/standalone";
import { greetingRouter } from "./routers/helloWorld";
import { mergeRourters } from "./trpc";

const appRouter = mergeRourters(greetingRouter);

export type AppRouter = typeof appRouter;

// Create the tRPC handler
export const trpcHandler = createHTTPHandler({
  router: appRouter,
  createContext() {
    return {};
  },
});
