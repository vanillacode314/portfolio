<script lang="ts">
  import Section from '../components/Section.svelte'
  import testimonials from '../data/testimonials'
  import Testimonial from '../components/Testimonial.svelte'
  import { onMount } from 'svelte'

  const CAROUSEL_TIMEOUT: number = 20000 // in milliseconds
  let scrollElement: HTMLElement
  let childElements: HTMLElement[] = []
  let activeIndex = 1

  function step(dir: number) {
    activeIndex =
      (activeIndex + dir + testimonials.length) % testimonials.length
    const { width: containerWidth } = scrollElement.getBoundingClientRect()
    const { width: cardWidth } = childElements[0]
      .querySelector('.testimonial')
      .getBoundingClientRect()
    const width = scrollElement.scrollWidth / (containerWidth / cardWidth)
    scrollElement.scrollTo({
      behavior: 'smooth',
      left: (width / 2) * activeIndex,
      top: 0,
    })
  }

  onMount(() => {
    step(0)
    const interval = setInterval(() => step(1), CAROUSEL_TIMEOUT)
    return () => clearInterval(interval)
  })
</script>

<Section title="what others have to say" id="testimonials" fluid>
  <div class="testimonials" bind:this={scrollElement}>
    {#each testimonials as testimonial, index}
      <div bind:this={childElements[index]} style="display: contents">
        <Testimonial {testimonial} />
      </div>
    {/each}
  </div>
</Section>

<style>
  .testimonials {
    /* max-inline-size: var(--container-size); */
    /* margin-inline: auto; */
    display: flex;
    gap: var(--gap);
    width: 100%;
    padding: var(--gap);
    box-sizing: border-box;
    /* padding-block: var(--gap); */
    scroll-snap-type: x mandatory;
    overflow-x: auto;
    position: relative;
    @media (min-width: 1440px) {
      justify-content: center;
      /* flex-direction: column; */
    }
  }
</style>
