<script lang="ts">
  import Section from "../components/Section.svelte";
  import projects from "../data/projects";
</script>

<Section title="some projects i have worked on" id="projects">
  {#each projects as { repo_url, name, tech, description, points, url, image } (name)}
    <div class="grid">
      <h3>
        {name}
      </h3>
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
      <h4>({tech.join(", ")})</h4>
      <p>{description}</p>
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
    margin-block: var(--larger-gap);
    grid-template-rows: auto auto auto auto 1fr;
    row-gap: var(--small-gap);
  }
  h3 {
    font-size: var(--font-size-fluid-2);
    font-weight: bold;
    grid-column: 1/7;
  }
  a {
    color: black;
  }
  a:is(:hover, :focus) {
    color: var(--color-1);
  }
  .links {
    font-size: 14px;
    grid-column: 1/7;
    display: flex;
    gap: var(--gap);
  }
  .link {
    display: flex;
    align-items: center;
    gap: var(--small-gap);
  }
  h4 {
    color: #535353;
    font-size: 18px;
    grid-column: 1/7;
  }
  .points {
    display: flex;
    flex-direction: column;
    gap: var(--small-gap);
    list-style-type: disc;
    list-style-position: inside;
    font-size: 18px;
    grid-column: 1/7;
  }
  p {
    margin-top: var(--gap);
    /* white-space: pre-line; */
    font-size: 18px;
    grid-column: 1/5;
  }
  .image {
    grid-column: 7/13;
    grid-row: 1/-1;
    @media (--lg-n-above) {
      margin-inline: var(--large-gap);
    }
    border-radius: var(--radius);
    overflow: hidden;
  }
  .grid:nth-child(even) {
    h3,
    h4,
    .points,
    p,
    .links {
      grid-column: 7/13;
    }
    .image {
      grid-column: 1/7;
    }
  }
  @media (--md-n-below) {
    h3,
    h4,
    .points,
    p,
    .image,
    .links {
      grid-column: span 12;
    }
    .grid:nth-child(even) {
      h3,
      h4,
      .points,
      p,
      .image,
      .links {
        grid-column: span 12;
      }
    }
  }
</style>
