import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "../../server/trpc/main";

export const trpc = createTRPCReact<AppRouter>();
