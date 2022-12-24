import { z } from "zod";
import { publicProcedure, router } from "../trpc";

export const greetingRouter = router({
  greeting: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(({ input }) => {
      return { message: `Hello, ${input.name || "World"}!` };
    }),
});
