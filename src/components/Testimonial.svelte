<script lang="ts">
  import { Testimonial } from '../data/testimonials'

  export let testimonial: Testimonial
</script>

<figure class="testimonial">
  <span class="quote">&ldquo;</span>
  <blockquote>
    <p>
      &ldquo;{testimonial.content}&rdquo;
    </p>
  </blockquote>
  <figcaption>
    - {testimonial.author}, {testimonial.title}
  </figcaption>
</figure>

<style lang="postcss">
  .testimonial {
    background-color: var(--color-1);
    color: white;
    padding: var(--large-gap);
    border-radius: var(--radius);
    flex: 50% 1 0;
    display: flex;
    flex-direction: column;
    max-inline-size: 30rem;
    justify-content: space-between;
    gap: var(--large-gap);
    scroll-snap-align: center;
    @media (--md-n-below) {
      position: relative;
      flex: 80% 1 0;
    }
  }
  .quote {
    position: absolute;
    top: 0;
    font-size: 210px;
    color: var(--color-2);
    user-select: none;
    transform: translateY(-23%);
    @media (--md-n-below) {
      font-size: 140px;
      transform: translateY(-25%);
    }
  }
  p {
    line-height: 1.1;
    font-size: var(--font-size-1);
    @media (--md-n-above) {
      font-size: var(--font-size-2);
    }
    @media (--lg-n-above) {
      font-size: var(--font-size-3);
    }
  }
  figcaption {
    align-self: end;
    /* font-weight: 600; */
    text-align: right;
    font-size: var(--font-size-0);
    @media (--md-n-above) {
      font-size: var(--font-size-1);
    }
    @media (--lg-n-above) {
      font-size: var(--font-size-2);
    }
  }
</style>
