import { defineCollection, z } from 'astro:content'

export const collections = {
	blog: defineCollection({
		schema: z.object({
			title: z.string(),
			description: z.string(),
			seo: z.object({
				title: z.string(),
				description: z.string(),
				keywords: z.string().array()
			}),
			author: z.string(),
			created: z.string(),
			updated: z.string().optional()
		})
	})
}
