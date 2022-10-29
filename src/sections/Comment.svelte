<script lang="ts">
  interface Comment {
    id: string
    comment: string
    username: string
  }
  import { onMount, tick } from 'svelte'

  import { writable } from 'svelte-local-storage-store'
  import { sleep } from '@utils'

  const BASE_URL = 'https://api.raqueebuddinaziz.com'

  export let slug: string
  let username = writable<string>('username', '')
  let email = writable<string>('email', '')
  let comment: string = ''
  let comments: Comment[] = []
  let cooldown: number = 0
  const filterRegex: RegExp = /\<a.*href\=\".*\".*\>/m

  async function countdown() {
    const count = --cooldown
    await sleep(1000)
    if (count > 0) countdown()
  }

  function validateComment() {
    return !filterRegex.test(comment)
  }

  async function onSubmit() {
    if (!validateComment()) {
      alert('Your comment cannot contain html tags')
      cooldown = 10
      await tick()
      countdown()
      return
    }

    try {
      cooldown = 5
      await tick()
      await fetch(BASE_URL + '/comment', {
        method: 'POST',
        redirect: 'error',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          username: $username,
          email: $email,
          comment,
          slug,
        }),
      })
    } finally {
      comment = ''
      countdown()
      getComments()
    }
  }

  async function getComments() {
    const res = await fetch(
      BASE_URL + `/get_comments?slug=${encodeURIComponent(slug)}`
    )
    const data = await res.json()
    comments = data.comments
  }

  onMount(() => getComments())
</script>

<!-- <h3>Leave a comment</h3> -->
<form
  on:submit|preventDefault={onSubmit}
  class="comment-form"
  name="comment"
  action={BASE_URL + '/comment'}
  method="POST"
>
  <input type="hidden" name="slug" value={slug} />
  <div class="form-control">
    <label for="name"> Name</label>
    <input id="name" name="username" required bind:value={$username} />
  </div>
  <div class="form-control">
    <label for="email">Email (never shared publicly)</label>
    <input type="email" id="email" name="email" required bind:value={$email} />
  </div>
  <div class="form-control full">
    <label for="comment"> Comment</label>
    <textarea id="comment" name="comment" required bind:value={comment} />
  </div>
  <div class="form-control full actions">
    {#if cooldown > 0}
      <button class="btn btn-primary-gray-600 cursor-not-allowed" disabled
        >Wait {cooldown} seconds</button
      >
    {:else}
      <button class="btn-primary-blue-900 btn">Submit</button>
    {/if}
  </div>
</form>

<div class="comments-list">
  {#each comments as { id, username, comment } (id)}
    <article class="comment">
      <h3 class="username">
        {username}
      </h3>
      <p class="comment">{comment}</p>
    </article>
  {/each}
</div>

<style lang="postcss">
  .comments-list {
    display: grid;
    gap: var(--gap);
    margin-block-start: var(--large-gap);
  }

  input,
  textarea {
    border: none;
    outline: 2px solid var(--color-1);
    border-radius: calc(var(--radius) / 2);
    padding: var(--gap);
    max-width: 100%;
    min-width: 10%;
    &:hover {
      outline: 2px solid var(--color-2);
    }
    &:focus {
      outline: 2px solid var(--color-3);
    }
    /* font-family: sans-serif; */
  }
  textarea {
    height: 200px;
    resize: none;
  }

  form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--gap);
  }

  .form-control {
    grid-template-rows: auto 1fr;
    display: grid;
    grid-column: 1/-1;
    gap: var(--small-gap);
    label {
      font-weight: 600;
      letter-spacing: var(--font-letterspacing-2);
      text-transform: uppercase;
      font-size: var(--font-size-0);
    }
    @media (--md-n-above) {
      grid-column: span 1;
    }
  }

  .username {
    font-weight: 600;
    color: var(--gray-7);
    letter-spacing: var(--font-letterspacing-2);
    text-transform: uppercase;
    font-size: var(--font-size-0);
  }

  .comment {
    font-size: var(--body-text);
  }

  .full {
    grid-column: 1/-1;
  }

  article.comment {
    background-color: rgb(0 0 0 / 5%);
    border-radius: var(--radius);
    padding: var(--gap);
  }
</style>
