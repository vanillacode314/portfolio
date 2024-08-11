interface Comment {
	id: string
	comment: string
	username: string
}

import { sleep } from '@/utils'
import { makePersisted } from '@solid-primitives/storage'
import clsx from 'clsx'
import { createResource, createSignal, For, Show } from 'solid-js'
import { createStore } from 'solid-js/store'
import z from 'zod'

const BASE_URL = 'https://api.raqueeb.com'

export default function Comments(props: { slug: string }) {
	const formSchema = z.object({
		username: z.string().default(''),
		email: z.string().default('')
	})

	const [formData, setFormData] = makePersisted(createStore(formSchema.parse({})), {
		name: 'comment-form',
		serialize: (data) => {
			try {
				return JSON.stringify(formSchema.parse(data))
			} catch {
				return JSON.stringify(formSchema.parse({}))
			}
		},
		deserialize: (data) => {
			try {
				return formSchema.parse(JSON.parse(data))
			} catch {
				return formSchema.parse({})
			}
		}
	})

	const [comment, setComment] = createSignal<string>('')
	let cooldown: number = 0
	const filterRegex: RegExp = /\<a.*href\=\".*\".*\>/m

	async function countdown() {
		const count = --cooldown
		await sleep(1000)
		if (count > 0) countdown()
	}

	function validateComment() {
		return !filterRegex.test(comment())
	}

	async function onSubmit(e: SubmitEvent) {
		e.preventDefault()

		if (!validateComment()) {
			alert('Your comment cannot contain html tags')
			cooldown = 10
			countdown()
			return false
		}

		const form = e.target as HTMLFormElement

		try {
			cooldown = 5
			await fetch(form.action, {
				method: form.method,
				redirect: 'error',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify({
					username: formData.username,
					email: formData.email,
					comment: comment().trim(),
					slug: props.slug
				})
			})
		} finally {
			setComment('')
			countdown()
			refetch()
			return false
		}
	}

	const [comments, { refetch }] = createResource(getComments, {
		initialValue: []
	})
	async function getComments() {
		const res = await fetch(BASE_URL + `/api/v1/comments?slug=${encodeURIComponent(props.slug)}`)
		const data = await res.json()
		return data.comments as Comment[]
	}
	return (
		<>
			<h2 class="mx-auto uppercase text-xl text-gray-700 font-semibold my-5">Leave a Comment</h2>
			<section aria-label="comment-section" id="comment-section">
				<form
					onSubmit={onSubmit}
					action={BASE_URL + '/api/v1/comments'}
					method="post"
					class="flex flex-col bg-white rounded-10 text-gray-900 overflow-hidden p-10 gap-5 border-2 border-[--color] [--color:theme(colors.orange.600)]"
					style="box-shadow: var(--color) 0px 2px"
				>
					<div class="flex flex-col gap-1">
						<label
							for="name"
							class="uppercase tracking-wide font-semibold text-gray-600 text-xs ml-3"
						>
							Name
						</label>
						<input
							type="text"
							name="name"
							id="name"
							placeholder="e.g. John Doe"
							class={clsx([
								'rounded-lg w-full min-w-0 px-5 py-3 border-2 border-[--color] focus:outline-none',
								'[--color:theme(colors.gray.300)] hover:[--color:theme(colors.orange.600)] focus:[--color:theme(colors.orange.600)]'
							])}
							style="box-shadow: var(--color) 0px 2px"
							required
							value={formData.username}
							onInput={(e) => setFormData({ username: e.currentTarget.value })}
						/>
					</div>
					<div class="flex flex-col gap-1">
						<label
							class="uppercase tracking-wide font-semibold text-gray-600 text-xs ml-3"
							for="email"
						>
							Email
						</label>
						<input
							name="email"
							type="email"
							id="email"
							placeholder="e.g. name@domain.com"
							class={clsx([
								'rounded-lg w-full min-w-0 px-5 py-3 border-2 border-[--color] focus:outline-none',
								'[--color:theme(colors.gray.300)] hover:[--color:theme(colors.orange.600)] focus:[--color:theme(colors.orange.600)]'
							])}
							style="box-shadow: var(--color) 0px 2px"
							required
							value={formData.email}
							onInput={(e) => setFormData({ email: e.currentTarget.value })}
						/>
					</div>
					<div class="flex flex-col gap-1">
						<label
							class="uppercase tracking-wide font-semibold text-gray-600 text-xs ml-3"
							for="comment"
						>
							Comment
						</label>
						<textarea
							name="comment"
							id="comment"
							placeholder="Your comment here"
							class={clsx([
								'rounded-lg w-full min-w-0 px-5 py-3 border-2 border-[--color] focus:outline-none',
								'[--color:theme(colors.gray.300)] hover:[--color:theme(colors.orange.600)] focus:[--color:theme(colors.orange.600)]'
							])}
							style="box-shadow: var(--color) 0px 2px"
							required
							value={comment()}
							onInput={(e) => setComment(e.currentTarget.value)}
						></textarea>
					</div>
					<Show
						when={cooldown > 0}
						fallback={
							<button
								class="rounded-lg ml-auto whitespace-nowrap px-5 py-3 font-bold text-orange-600 border-2 border-orange-600 transition hover:bg-orange-600 hover:text-white"
								style="box-shadow: #ea580c 0px 5px"
							>
								Submit
							</button>
						}
					>
						<button
							class="rounded-lg ml-auto whitespace-nowrap px-5 py-3 font-bold text-orange-600 border-2 border-orange-600 transition hover:bg-orange-600 hover:text-white"
							style="box-shadow: #ea580c 0px 5px"
							disabled
						>
							Wait {cooldown} seconds
						</button>
					</Show>
				</form>
			</section>
			<h2 class="mx-auto uppercase text-xl text-gray-700 font-semibold my-5">Comments</h2>
			<div class="flex flex-col gap-5">
				<For
					each={comments.latest}
					fallback={
						<div class="uppercase font-semibold grid place-content-center text-gray-400">
							No Comments
						</div>
					}
				>
					{({ username, comment }) => (
						<article class="bg-gray-100 p-5 rounded-5 flex flex-col gap-1 border shadow-sm whitespace-pre-line">
							<h3 class="uppercase tracking-wide font-semibold text-gray-600 text-xs">
								{username}
							</h3>
							<p class="text-gray-900 whitespace-pre-wrap">{comment.trim()}</p>
						</article>
					)}
				</For>
			</div>
		</>
	)
}
