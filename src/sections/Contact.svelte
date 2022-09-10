<script lang="ts">
  import Button from "../components/Button.svelte";
</script>

<article class="grid" id="contact">
  <h2>get in touch</h2>
  <form name="contact" data-netlify="true">
    <div class="form-control">
      <label for="name"> Name: </label>
      <input
        placeholder="John Doe"
        type="text"
        id="name"
        name="name"
        required
      />
    </div>
    <div class="form-control">
      <label for="email"> Email: </label>
      <input
        placeholder="example@example.com"
        type="email"
        id="email"
        name="email"
        required
      />
    </div>
    <div class="form-control full">
      <label for="message"> Message: </label>
      <textarea id="message" name="message" required />
    </div>
    <span class="actions">
      <Button dark color="white" variant="secondary" type="submit"
        >Send Message</Button
      >
    </span>
  </form>
</article>

<style>
  article {
    background-color: var(--color-1);
    padding: var(--large-gap);
    color: white;
    border-radius: var(--radius);
    row-gap: var(--gap);
    @media (--lg-n-above) {
      padding: var(--large-gap) var(--larger-gap);
    }
  }
  h2 {
    font-size: var(--font-size-fluid-2);
    margin-bottom: var(--gap);
    grid-column: span 12;
    text-align: center;
  }
  input,
  textarea {
    font-size: 16px;
    border: none;
    outline: none;
    border-radius: var(--radius);
    padding: var(--gap);
    max-width: 100%;
    min-width: 10%;
    font-family: sans-serif;
  }
  input:hover,
  textarea:hover {
    outline: 2px solid var(--color-1);
  }
  textarea {
    height: 300px;
    resize: none;
  }
  input:focus,
  textarea:focus {
    outline: 2px solid var(--color-3);
  }
  .actions {
    display: grid;
    place-content: center;
    grid-column: span 12;
  }
  form {
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
