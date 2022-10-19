import { onMount, For, Component } from 'solid-js'
import testimonials from '../data/testimonials'
import { Testimonial } from '../components/Testimonial'
import styles from './Testimonial.module.css'

const CAROUSEL_TIMEOUT: number = 20000 // in milliseconds

export const Testimonials: Component = () => {
  let scrollElement: HTMLDivElement
  let childElements: HTMLDivElement[] = []
  let activeIndex = 1

  function step(dir: number) {
    activeIndex =
      (activeIndex + dir + testimonials.length) % testimonials.length
    const { width: containerWidth } = scrollElement.getBoundingClientRect()
    const { width: cardWidth } = childElements[0]
      .querySelector('[data-tag=testimonial]')!
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

  return (
    <div class={styles.testimonials} ref={scrollElement!}>
      <For each={testimonials}>
        {(testimonial, index) => (
          <div ref={childElements[index()]} style="display: contents">
            <Testimonial testimonial={testimonial} data-tag="testimonial" />
          </div>
        )}
      </For>
    </div>
  )
}
