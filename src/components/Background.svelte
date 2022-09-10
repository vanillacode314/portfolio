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
            position: fixed;
            inset: 0;
      }
      .bg-box {
            z-index: var(--bg-layer);
            position: absolute;
            border-radius: var(--radius);
            height: 300px;
            width: 300px;
            transform: rotate(60deg);
            filter: blur(10px);
            opacity: 75%;
            &:first-child {
                  @media (--md-n-below) {
                        display: none;
                  }
            }
      }
</style>
