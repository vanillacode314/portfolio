import { z, defineCollection } from "astro:content";

export const collections = {
  blog: defineCollection({
    schema: z.object({
      title: z.string(),
      description: z.string(),
      seo: z.object({
        title: z.string(),
        description: z.string(),

        keywords: z.array(z.string()),
      }),
      author: z.string(),
      created: z.string(),
      updated: z.string().optional(),
    }),
  }),
};
