import { createHTTPHandler } from "@trpc/server/adapters/standalone";
import { echoDataRouter } from "./routers/echoData";
import { greetingRouter } from "./routers/helloWorld";
import { mergeRourters } from "./trpc";

const appRouter = mergeRourters(echoDataRouter, greetingRouter);

export type AppRouter = typeof appRouter;

// Create the tRPC handler
export const trpcHandler = createHTTPHandler({
  router: appRouter,
  createContext() {
    return {};
  },
});
