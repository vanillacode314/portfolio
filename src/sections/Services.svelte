<script lang="ts">
  import Section from "../components/Section.svelte";
  import services from "../data/services";
</script>

<Section title="why work with me" id="services">
  {#each services as { title, content, image } (title)}
    <div class="item">
      <div class="content_container">
        <h3 class="title">{title}</h3>
        <p class="content">{content}</p>
      </div>
      <img
        loading="lazy"
        class="image"
        src="/assets/images/{image.name}"
        alt={image.alt}
      />
    </div>
  {/each}
</Section>

<style lang="postcss">
  .item {
    display: grid;
    margin-block: var(--larger-gap);
    gap: var(--larger-gap);
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "content image";
    &:nth-child(even) {
      grid-template-areas: "image content";
    }
    @media (--md-n-below) {
      grid-template-columns: 1fr;
      grid-template-areas:
        "image"
        "content";
      &:nth-child(even) {
        grid-template-areas:
          "image"
          "content";
      }
    }
  }
  .content_container {
    grid-area: content;
    display: grid;
    align-content: start;
    gap: var(--gap);
  }

  .title {
    /* font-weight: bold; */
    @media (--md-n-below) {
      text-align: center;
    }
  }
  .content {
    /* white-space: pre-line; */
    line-height: var(--font-lineheight-1);
    text-align: justify;
    font-size: var(--body-text);
  }
  .arrow {
    grid-row: 1/-1;
    align-self: center;
    justify-self: center;
    font-size: 100px;
  }
  .image {
    grid-area: image;
    width: var(--size-fluid-10);
    margin-inline: auto;
    align-self: center;
  }
</style>
