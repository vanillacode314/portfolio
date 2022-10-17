<script lang="ts">
  export let title: string
  export let fluid: boolean = false
</script>

<section {...$$restProps} class="section" class:fluid>
  <h2 class="section__title">{title}</h2>
  <div class="section__body">
    <slot />
  </div>
</section>

<style lang="postcss">
  .section {
    display: flex;
    padding-block: var(--large-gap);
    flex-direction: column;
    gap: var(--gap);
    .section__title {
      /* font-weight: bold; */
      font-family: var(--headline-family);
      text-align: center;
      max-width: 15ch;
      margin-inline: auto;
      font-size: var(--h2-text);
    }
    &:not(.fluid) {
      .section__body {
        padding-inline: var(--container-padding);
        max-inline-size: var(--container-size);
        margin-inline: auto;
      }
    }
  }
</style>
