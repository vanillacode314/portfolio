<script lang="ts">
  import Section from "../components/Section.svelte";
  import projects from "../data/projects";
</script>

<Section title="some projects i have worked on" id="projects">
  {#each projects as { repo_url, name, tech, description, points, url, image } (name)}
    <div class="grid">
      <h2>
        {name}
      </h2>
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
      <h3>({tech.join(", ")})</h3>
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
    row-gap: var(--gap);
  }
  h2 {
    font-size: var(--font-size-fluid-3);
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
    display: flex;
    gap: var(--gap);
  }
  .link {
    display: flex;
    align-items: center;
    gap: var(--small-gap);
  }
  h3 {
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
    /* white-space: pre-line; */
    font-size: 18px;
    grid-column: 1/5;
  }
  .image {
    grid-column: 7/13;
    grid-row: 1/-1;
    margin-inline: var(--large-gap);
    border-radius: var(--radius);
    overflow: hidden;
  }
  .grid:nth-child(even) {
    h2 {
      grid-column: 7/13;
    }
    .points {
      grid-column: 7/13;
    }
    h3 {
      grid-column: 7/13;
    }
    p {
      grid-column: 7/13;
    }
    .image {
      grid-column: 1/7;
    }
  }
  @media (--md-n-below) {
    h2 {
      grid-column: span 12;
    }
    h3 {
      grid-column: span 12;
    }
    .points {
      grid-column: span 12;
    }
    p {
      grid-column: span 12;
    }
    .image {
      grid-column: span 12;
    }
    .grid:nth-child(even) {
      h2 {
        grid-column: span 12;
      }
      h3 {
        grid-column: span 12;
      }
      .points {
        grid-column: span 12;
      }
      p {
        grid-column: span 12;
      }
      .image {
        grid-column: span 12;
      }
    }
  }
</style>
