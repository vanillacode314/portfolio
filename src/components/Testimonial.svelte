<script lang="ts">
  import { Testimonial } from "../data/testimonials";

  export let testimonial: Testimonial;
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

<style>
  .testimonial {
    background-color: var(--color-1);
    color: white;
    padding: var(--large-gap);
    border-radius: var(--radius);
    flex: 50% 1 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: var(--gap);
    scroll-snap-align: center;
    @media (--md-n-below) {
      position: relative;
      flex: 80% 1 0;
    }
    /* @media (max-width: 768px) { */
    /*     flex-direction: column; */
    /* } */
  }
  .quote {
    position: absolute;
    top: 0;
    font-size: 100px;
    color: var(--color-2);
    user-select: none;
    @media (--md-n-below) {
      font-size: 75px;
      transform: translateY(-25%);
    }
  }
  blockquote {
    font-size: var(--font-size-fluid-1);
    line-height: 110%;
  }
  figcaption {
    align-self: end;
    /* font-weight: 600; */
    font-size: 18px;
    text-align: right;
  }
</style>
