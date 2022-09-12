<script lang="ts">
  import Button from "../components/Button.svelte";

  function onSubmit() {
    gtag("event", "generate_lead");
  }
</script>

<article class="grid" id="contact">
  <h2>get in touch</h2>
  <form name="contact" data-netlify="true" on:submit={onSubmit}>
    <div class="form-control">
      <label for="name"> Name</label>
      <input
        placeholder="John Doe"
        type="text"
        id="name"
        name="name"
        required
      />
    </div>
    <div class="form-control">
      <label for="email"> Email </label>
      <input
        placeholder="example@example.com"
        type="email"
        id="email"
        name="email"
        required
      />
    </div>
    <div class="form-control full">
      <label for="message"> Message </label>
      <textarea id="message" name="message" required />
    </div>
    <span class="actions">
      <Button dark color="white" variant="secondary" type="submit"
        >Send Message</Button
      >
    </span>
  </form>
</article>

<style lang="postcss">
  article {
    background-color: var(--color-1);
    padding: var(--large-gap);
    color: white;
    border-radius: var(--radius);
    row-gap: var(--gap);
    max-width: 720px;
    margin-inline: auto;
    @media (--lg-n-above) {
      padding: var(--large-gap) var(--larger-gap);
    }
  }
  label {
    font-family: var(--headline-family);
  }
  h2 {
    font-size: var(--h3-text);
    margin-bottom: var(--gap);
    grid-column: span 12;
    font-family: var(--headline-family);
    text-align: center;
  }
  input,
  textarea {
    border: none;
    outline: none;
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
  .actions {
    display: grid;
    place-content: center;
    grid-column: span 12;
  }
  form {
    font-size: 14px;
    display: contents;
  }
  .form-control {
    grid-template-rows: auto 1fr;
    display: grid;
    gap: var(--small-gap);
    grid-column: span 6;
  }
  .full {
    grid-column: span 12;
  }
  @media (--md-n-below) {
    .form-control {
      grid-column: span 12;
    }
  }
</style>
