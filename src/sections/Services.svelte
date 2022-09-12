<script lang="ts">
  import Section from "../components/Section.svelte";
  import services from "../data/services";
</script>

<Section title="why work with me" id="services">
  {#each services as { title, content, image } (title)}
    <div class="grid">
      <h3 class="title">{title}</h3>
      <p class="content">{content}</p>
      <!-- <span class="arrow"> -->
      <!--   <svg width="1em" height="1em" viewBox="0 0 24 24" -->
      <!--     ><path -->
      <!--       d="M6.45 17.45L1 12l5.45-5.45l1.41 1.41L4.83 11h14.34l-3.03-3.04l1.41-1.41L23 12l-5.45 5.45l-1.41-1.41L19.17 13H4.83l3.03 3.04l-1.41 1.41Z" -->
      <!--     /></svg -->
      <!--   > -->
      <!-- </span> -->
      <img class="image" src="/assets/images/{image.name}" alt={image.alt} />
    </div>
  {/each}
</Section>

<style lang="postcss">
  .grid {
    --content-span: 4;
    --odd-content-start: 1;
    --even-content-start: 9;

    --image-span: 4;
    --odd-image-start: 9;
    --even-image-start: 1;

    @media (--md-n-below) {
      --content-span: 12;
      --odd-content-start: 1;
      --even-content-start: 1;

      --image-span: 12;
      --odd-image-start: 1;
      --even-image-start: 1;
    }

    background-color: rgb(0 0 0 / 5%);
    border-radius: var(--radius);
    padding: var(--large-gap);
    margin-block: var(--larger-gap);
    grid-template-rows: auto 1fr;
    row-gap: var(--gap);

    .title {
      /* font-weight: bold; */
      grid-column-start: var(--odd-content-start);
      grid-column-end: span var(--content-span);
      @media (--md-n-below) {
        text-align: center;
      }
    }
    .content {
      white-space: pre-line;
      text-align: justify;
      font-size: var(--body-text);
      grid-column-start: var(--odd-content-start);
      grid-column-end: span var(--content-span);
      line-height: 1.1;
    }
    .arrow {
      grid-row: 1/-1;
      align-self: center;
      justify-self: center;
      font-size: 100px;
      grid-column-start: calc(var(--content-span) + 1);
      grid-column-end: span calc(12 - var(--content-span) - var(--image-span));
    }
    .image {
      width: var(--size-fluid-10);
      margin-inline: auto;
      grid-column-start: var(--odd-image-start);
      grid-column-end: span var(--image-span);
      grid-row: 1/-1;
      align-self: center;
    }
    &:nth-child(even) {
      .title {
        grid-column-start: var(--even-content-start);
      }
      .content {
        grid-column-start: var(--even-content-start);
      }
      .arrow {
        grid-column-start: calc(var(--content-span) + 1);
      }
      .image {
        grid-column-start: var(--even-image-start);
      }
    }
  }
</style>
