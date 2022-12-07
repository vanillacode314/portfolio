import { Component, JSX, splitProps } from 'solid-js'
import type { Testimonial as ITestimonial } from '../data/testimonials'
import styles from './Testimonial.module.css'

interface Props extends JSX.HTMLAttributes<HTMLElement> {
  testimonial: ITestimonial
}

export const Testimonial: Component<Props> = (props) => {
  const [local, others] = splitProps(props, ['testimonial'])
  return (
    <figure class={styles.testimonial} {...others}>
      <span class={styles.quote}>&ldquo;</span>
      <blockquote>
        <p>&ldquo; {local.testimonial.content} &rdquo;</p>
      </blockquote>
      <figcaption class="text-blue-200 text-sm md:text-base">
        - {local.testimonial.author}, {local.testimonial.title}
      </figcaption>
    </figure>
  )
}
