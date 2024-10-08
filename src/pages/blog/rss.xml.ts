import rss from '@astrojs/rss'
import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'
import MarkdownIt from 'markdown-it'
import sanitizeHtml from 'sanitize-html'
const parser = new MarkdownIt()

export const GET: APIRoute = async (context) => {
	const posts = (await getCollection('blog'))
		.sort((a, b) => {
			const date1 = new Date(a.data.created)
			const date2 = new Date(b.data.created)
			if (date1 === date2) return 0
			if (date1 >= date2) return -1
			return 1
		})
		.map((post) => {
			const updatedAt = new Date(post.data.updated || post.data.created)
			return {
				year: updatedAt.getFullYear().toString(),
				month: (updatedAt.getMonth() + 1).toString().padStart(2, '0'),
				day: updatedAt.getDate().toString().padStart(2, '0'),
				...post
			}
		})

	return rss({
		stylesheet: '/assets/styles/rss.xsl',
		title: "Raqueebuddin's Blog",
		description: 'All about web design & development',
		site: context.site!.toString(),
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: new Date(post.data.created),
			description: post.data.description,
			author: post.data.author,
			link: `/blog/${post.year}/${post.month}/${post.day}/${post.slug}/`,
			content: sanitizeHtml(parser.render(post.body))
		})),
		customData: `<language>en-us</language>`
	})
}
