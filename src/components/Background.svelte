<script lang="ts">
  function updateParallax() {
    const percentScrolled =
      document.scrollingElement.scrollTop /
      (document.scrollingElement.scrollHeight -
        document.scrollingElement.clientHeight);
    document.body.style.setProperty(
      "--percent-scrolled",
      percentScrolled + "px"
    );
  }
</script>

<svelte:window on:scroll={updateParallax} />

<div class="container">
  <div
    class="bg-box"
    style="background-color: var(--color-3); top: 20%; left:0;"
  />
  <div
    class="bg-box"
    style="background-color: var(--color-4); right: 0; top:-200px"
  />
  <div
    class="bg-box"
    style="background-color: var(--color-2); right: 0; top:50%;"
  />
</div>

<style>
  .container {
    pointer-events: none;
    position: fixed;
    inset: 0;
    z-index: var(--bg-layer);
  }
  .bg-box {
    position: absolute;
    border-radius: var(--radius);
    height: 300px;
    width: 300px;
    transform: translateY(calc(var(--percent-scrolled, 0px) * 100))
      rotate(60deg);
    filter: blur(10px);
    opacity: 10%;
    &:first-child {
      @media (--md-n-below) {
        display: none;
      }
    }
  }
</style>
