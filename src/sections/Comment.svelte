<script lang="ts">
  interface Comment {
    id: string;
    comment: string;
    username: string;
  }
  import { onMount, tick } from "svelte";

  import { writable } from "svelte-local-storage-store";
  import Button from "@components/Button.svelte";
  import Section from "@components/Section.svelte";
  import { sleep } from "@utils";

  const BASE_URL = "https://api.raqueebuddinaziz.com";

  export let slug: string;
  let username = writable<string>("username", "");
  let email = writable<string>("email", "");
  let comment: string = "";
  let comments: Comment[] = [];
  let cooldown: number = 0;

  async function onSubmit() {
    try {
      cooldown = 5;
      await tick();
      await fetch(BASE_URL + "/comment", {
        method: "POST",
        redirect: "error",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          username: $username,
          email: $email,
          comment,
          slug,
        }),
      });
    } finally {
      comment = "";
      async function countdown() {
        if (cooldown > 0) {
          cooldown--;
          await sleep(1000);
          countdown();
        }
      }
      countdown();
      getComments();
    }
  }

  async function getComments() {
    const res = await fetch(
      BASE_URL + `/get_comments?slug=${encodeURIComponent(slug)}`
    );
    const data = await res.json();
    comments = data.comments;
  }

  onMount(() => {
    getComments();
  });
</script>

<Section title="Comments">
  <h3>Leave a comment</h3>
  <form
    on:submit|preventDefault={onSubmit}
    class="comment-form"
    name="comment"
    action={BASE_URL + "/comment"}
    method="POST"
  >
    <input type="hidden" name="slug" value={slug} />
    <div class="form-control">
      <label for="name"> Name</label>
      <input id="name" name="username" required bind:value={$username} />
    </div>
    <div class="form-control">
      <label for="email">Email (never shared publicly)</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        bind:value={$email}
      />
    </div>
    <div class="form-control full">
      <label for="comment"> Comment</label>
      <textarea id="comment" name="comment" required bind:value={comment} />
    </div>
    <div class="form-control full actions">
      {#if cooldown > 0}
        <Button type="submit" disabled>Wait {cooldown} seconds</Button>
      {:else}
        <Button type="submit">Submit</Button>
      {/if}
    </div>
  </form>

  {#each comments as { id, username, comment } (id)}
    <article class="comment">
      <h3>
        {username}
      </h3>
      <p>{comment}</p>
    </article>
  {/each}
</Section>
