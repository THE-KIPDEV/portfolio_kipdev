import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const skillRouter = createTRPCRouter({
  create: protectedProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.skills.create({
        data: {
          name: input.name,
        },
      });
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.db.skills.findMany();
  }),
});
