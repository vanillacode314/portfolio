<script lang="ts">
  import Section from "../components/Section.svelte";
  import testimonials from "../data/testimonials";
  import Testimonial from "../components/Testimonial.svelte";
  import { onMount } from "svelte";

  let scrollElement: HTMLElement;

  onMount(() => {
    const { width } = scrollElement.getBoundingClientRect();
    scrollElement.scrollTo(width * 0.5, 0);
  });
</script>

<Section title="what others have to say" id="testimonials">
  <div class="testimonials" bind:this={scrollElement}>
    {#each testimonials as testimonial}
      <Testimonial {testimonial} />
    {/each}
  </div>
</Section>

<style>
  .testimonials {
    display: flex;
    gap: var(--gap);
    width: 100%;
    padding-top: var(--large-gap);
    padding-bottom: var(--gap);
    scroll-snap-type: x mandatory;
    overflow-x: auto;
    position: relative;
  }
  @media (max-width: 768px) {
    .testimonials {
      flex-direction: column;
    }
  }
</style>
