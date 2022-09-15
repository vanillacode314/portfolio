<script lang="ts">
  import Button from "../components/Button.svelte";

  function onSubmit() {
    gtag("event", "generate_lead");
  }
</script>

<div class="contact__wrapper">
  <section class="section__contact" id="contact">
    <h2>get in touch</h2>
    <form class="hidden" name="contact" data-netlify="true">
      <input type="hidden" name="name" />
      <input type="hidden" name="email" />
      <input type="hidden" name="message" />
    </form>
    <form name="contact" on:submit={onSubmit} method="POST">
      <input type="hidden" name="form-name" value="contact" />
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
  </section>
</div>

<style lang="postcss">
  .contact__wrapper {
    max-inline-size: var(--container-size);
    padding-inline: var(--container-padding);
    margin-inline: auto;
  }
  .section__contact {
    margin-bottom: var(--large-gap);
    display: grid;
    background-color: var(--color-1);
    padding: var(--large-gap);
    color: white;
    border-radius: var(--radius);
    gap: var(--gap);
    grid-template-columns: 1fr;
    @media (--lg-n-above) {
      grid-template-columns: repeat(2, 1fr);
      padding: var(--large-gap) var(--larger-gap);
    }
  }
  label {
    font-family: var(--headline-family);
  }
  h2 {
    font-size: var(--h3-text);
    margin-bottom: var(--gap);
    grid-column: 1/-1;
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
    grid-column: 1/-1;
  }
  form {
    font-size: 14px;
    display: contents;
  }
  .form-control {
    display: grid;
    grid-template-rows: auto 1fr;
    gap: var(--small-gap);
    grid-column: span 1;
  }
  .full {
    grid-column: 1/-1;
  }
  @media (--md-n-below) {
    .form-control {
      grid-column: 1/-1;
    }
  }
  form.hidden {
    display: none;
  }
</style>
