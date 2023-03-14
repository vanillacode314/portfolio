interface Comment {
  id: string;
  comment: string;
  username: string;
}

import z from "zod";
import { sleep } from "@/utils";
import { createStorageStore } from "@/utils/store";
import { createResource, createSignal, For, Show } from "solid-js";

const BASE_URL = "https://api.raqueebuddinaziz.com";

export default function Comments(props: { slug: string }) {
  const formSchema = z.object({
    username: z.string().default(""),
    email: z.string().default(""),
  });
  const [formData, setFormData] = createStorageStore(
    "comment-form",
    formSchema.parse({}),
    {
      schema: formSchema,
    }
  );
  const [comment, setComment] = createSignal<string>("");
  let cooldown: number = 0;
  const filterRegex: RegExp = /\<a.*href\=\".*\".*\>/m;

  async function countdown() {
    const count = --cooldown;
    await sleep(1000);
    if (count > 0) countdown();
  }

  function validateComment() {
    return !filterRegex.test(comment());
  }

  async function onSubmit(e: SubmitEvent) {
    e.preventDefault();
    if (!validateComment()) {
      alert("Your comment cannot contain html tags");
      cooldown = 10;
      countdown();
      return;
    }

    try {
      cooldown = 5;
      await fetch(BASE_URL + "/comment", {
        method: "POST",
        redirect: "error",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          comment: comment(),
          slug: props.slug,
        }),
      });
    } finally {
      setComment("");
      countdown();
      refetch();
    }
  }

  const [comments, { refetch }] = createResource(getComments, {
    initialValue: [],
  });
  async function getComments() {
    const res = await fetch(
      BASE_URL + `/get_comments?slug=${encodeURIComponent(props.slug)}`
    );
    const data = await res.json();
    return data.comments as Comment[];
  }
  return (
    <>
      <h2 class="mx-auto uppercase text-xl text-gray-700 font-semibold my-5">
        Leave a Comment
      </h2>
      <section aria-label="comment-section" id="comment-section">
        <form
          data-netlify="true"
          onSubmit={onSubmit}
          name="comment"
          action={BASE_URL + "/comment"}
          method="post"
          class="flex flex-col bg-gray-100/90 rounded-10 text-gray-900 shadow-lg overflow-hidden p-10 gap-5"
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
              class="px-5 py-3 rounded-5 min-w-0 w-full"
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
              class="px-5 py-3 rounded-5 min-w-0 w-full"
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
              class="px-5 py-3 rounded-5 min-h-xs min-w-0 w-full"
              required
              value={comment()}
              onInput={(e) => setComment(e.currentTarget.value)}
            ></textarea>
          </div>
          <Show
            when={cooldown > 0}
            fallback={
              <button class="px-5 py-3 shadow-lg text-gray-100 bg-orange-600 font-bold rounded-5 transition hover:shadow-none hover:bg-white hover:text-gray-900 whitespace-nowrap ml-auto">
                Submit
              </button>
            }
          >
            <button
              class="px-5 py-3 shadow-lg text-gray-100 bg-orange-600 font-bold rounded-5 transition hover:shadow-none hover:bg-white hover:text-gray-900 whitespace-nowrap ml-auto"
              disabled
            >
              Wait {cooldown} seconds
            </button>
          </Show>
        </form>
      </section>
      <h2 class="mx-auto uppercase text-xl text-gray-700 font-semibold my-5">
        Comments
      </h2>
      <div class="flex flex-col gap-5">
        <For
          each={comments()}
          fallback={
            <div class="uppercase font-semibold grid place-content-center text-gray-400">
              No Comments
            </div>
          }
        >
          {({ username, comment }) => (
            <article class="bg-gray-100 p-5 rounded-5 flex flex-col gap-1 shadow-sm">
              <h3 class="uppercase tracking-wide font-semibold text-gray-600 text-xs">
                {username}
              </h3>
              <p class="text-gray-900">{comment}</p>
            </article>
          )}
        </For>
      </div>
    </>
  );
}
