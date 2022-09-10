<script lang="ts">
  import Section from "../components/Section.svelte";
  import services from "../data/services";
</script>

<Section title="why work with me" id="services">
  {#each services as { title, content, image } (title)}
    <div class="grid">
      <h3>{title}</h3>
      <p>{content}</p>
      <img src="/assets/images/{image.name}" alt={image.alt} />
    </div>
  {/each}
</Section>

<style lang="postcss">
  h3 {
    font-size: var(--font-size-fluid-2);
    font-weight: bold;
    grid-column: 1/6;
  }
  p {
    white-space: pre-line;
    font-size: 18px;
    grid-column: 1/5;
  }
  img {
    width: var(--size-fluid-10);
    margin-inline: auto;
    grid-column: 7/13;
    grid-row: 1/-1;
  }
  .grid {
    margin-block: var(--larger-gap);
    grid-template-rows: auto 1fr;
    row-gap: var(--large-gap);
    &:nth-child(even) {
      h3 {
        grid-column: 7/13;
      }
      p {
        grid-column: 7/12;
      }
      img {
        grid-column: 1/7;
      }
    }
  }
  @media (--md-n-below) {
    h3 {
      grid-column: span 12;
    }
    p {
      grid-column: span 12;
    }
    img {
      grid-column: span 12;
    }
    .grid:nth-child(even) {
      h3 {
        grid-column: span 12;
      }
      p {
        grid-column: span 12;
      }
      img {
        grid-column: span 12;
      }
    }
  }
</style>
