<script lang="ts">
  import Section from "../components/Section.svelte";
  import projects from "../data/projects";
</script>

<Section title="some projects i have worked on" id="projects">
  {#each projects as { repo_url, name, tech, description, points, url, image } (name)}
    <div class="grid">
      <h3 class="title">
        {name}
      </h3>
      <!-- <span class="arrow"> -->
      <!--   <svg width="1em" height="1em" viewBox="0 0 24 24" -->
      <!--     ><path -->
      <!--       d="M6.45 17.45L1 12l5.45-5.45l1.41 1.41L4.83 11h14.34l-3.03-3.04l1.41-1.41L23 12l-5.45 5.45l-1.41-1.41L19.17 13H4.83l3.03 3.04l-1.41 1.41Z" -->
      <!--     /></svg -->
      <!--   > -->
      <!-- </span> -->
      <ul class="links">
        <li>
          <a class="link" href={url}>
            visit:
            <svg width="1em" height="1em" viewBox="0 0 24 24"
              ><path
                fill="currentColor"
                d="m21 12l-7-7v4C7 10 4 15 3 20c2.5-3.5 6-5.1 11-5.1V19l7-7Z"
              /></svg
            >
          </a>
        </li>
        <li>
          <a class="link" href={repo_url}>
            repo: <svg width="1em" height="1em" viewBox="0 0 24 24"
              ><path
                fill="currentColor"
                d="m14.6 16.6l4.6-4.6l-4.6-4.6L16 6l6 6l-6 6l-1.4-1.4m-5.2 0L4.8 12l4.6-4.6L8 6l-6 6l6 6l1.4-1.4Z"
              /></svg
            >
          </a>
        </li>
      </ul>
      <h4 class="tech">({tech.join(", ")})</h4>
      <p class="content">{description}</p>
      <ul class="points">
        {#each points as point}
          <li>{point}</li>
        {/each}
      </ul>
      <!-- <a href={url} class="image"> -->
      <img class="image" src="/assets/images/{image}" alt={name} />
      <!-- </a> -->
    </div>
  {/each}
</Section>

<style lang="postcss">
  .grid {
    --content-span: 4;
    --odd-content-start: 1;
    --even-content-start: 9;

    --image-span: 4;
    --odd-image-start: 9;
    --even-image-start: 1;

    @media (--md-n-below) {
      --content-span: 12;
      --odd-content-start: 1;
      --even-content-start: 1;

      --image-span: 12;
      --odd-image-start: 1;
      --even-image-start: 1;
    }

    background-color: rgb(0 0 0 / 5%);
    border-radius: var(--radius);
    margin-block: var(--larger-gap);
    padding: var(--large-gap);
    grid-template-rows: auto auto auto auto 1fr;
    row-gap: var(--small-gap);
    line-height: 120%;

    .title {
      /* font-weight: bold; */
      grid-column-start: var(--odd-content-start);
      grid-column-end: span var(--content-span);
      @media (--md-n-below) {
        text-align: center;
      }
    }
    .links {
      display: flex;
      gap: var(--gap);
      font-size: 12px;
      grid-column-start: var(--odd-content-start);
      grid-column-end: span var(--content-span);
      @media (--md-n-below) {
        justify-content: center;
      }
      .link {
        text-decoration: none;
        border-bottom: 1px dotted;
        display: flex;
        align-items: center;
        gap: var(--small-gap);
      }
    }
    .tech {
      font-size: 14px;
      grid-column-start: var(--odd-content-start);
      grid-column-end: span var(--content-span);
      color: #838383;
      @media (--md-n-below) {
        text-align: center;
      }
    }
    .content {
      white-space: pre-line;
      text-align: justify;
      font-size: var(--body-text);
      grid-column-start: var(--odd-content-start);
      grid-column-end: span var(--content-span);
      line-height: 1.1;
    }
    .points {
      list-style-type: "☑ ";
      list-style-position: inside;
      text-align: justify;
      font-size: var(--body-text);
      grid-column-start: var(--odd-content-start);
      grid-column-end: span var(--content-span);
    }
    .arrow {
      grid-row: 1/-1;
      align-self: center;
      justify-self: center;
      font-size: 100px;
      grid-column-start: calc(var(--content-span) + 1);
      grid-column-end: span calc(12 - var(--content-span) - var(--image-span));
      @media (--md-n-below) {
        display: none;
      }
    }
    .image {
      width: var(--size-fluid-10);
      margin-inline: auto;
      grid-column-start: var(--odd-image-start);
      grid-column-end: span var(--image-span);
      grid-row: 1/-1;
      align-self: center;
    }
    &:nth-child(even) {
      .links,
      .points,
      .tech,
      .title,
      .content {
        grid-column-start: var(--even-content-start);
      }
      .arrow {
        grid-column-start: calc(var(--content-span) + 1);
      }
      .image {
        grid-column-start: var(--even-image-start);
      }
    }
  }
</style>
