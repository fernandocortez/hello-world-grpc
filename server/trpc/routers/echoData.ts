import { z } from "zod";
import { publicProcedure, router } from "../trpc";

const User = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  age: z.number(),
});

export type UserType = z.infer<typeof User>;

export const echoDataRouter = router({
  echoData: publicProcedure
    .input(z.object({ users: User.array() }))
    .mutation(({ input }) => {
      return { users: input.users };
    }),
});
