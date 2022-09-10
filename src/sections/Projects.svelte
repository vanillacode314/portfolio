<script lang="ts">
  import Section from "../components/Section.svelte";
  import projects from "../data/projects";
</script>

<Section title="some projects i have worked on" id="projects">
  {#each projects as { name, tech, description, points, url, image } (name)}
    <div class="grid">
      <h2>
        <a href={url}>
          {name}
        </a>
      </h2>
      <h3>({tech.join(", ")})</h3>
      <p>{description}</p>
      <ul>
        {#each points as point}
          <li>{point}</li>
        {/each}
      </ul>
      <a href={url} class="image">
        <img src="/assets/images/{image}" alt={name} />
      </a>
    </div>
  {/each}
</Section>

<style lang="postcss">
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
  h3 {
    color: #535353;
    font-size: 18px;
    grid-column: 1/7;
  }
  ul {
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
  .grid {
    margin-block: var(--larger-gap);
    grid-template-rows: auto auto auto 1fr;
    row-gap: var(--gap);
  }
  .grid:nth-child(even) h2 {
    grid-column: 7/13;
  }
  .grid:nth-child(even) ul {
    grid-column: 7/13;
  }
  .grid:nth-child(even) h3 {
    grid-column: 7/13;
  }
  .grid:nth-child(even) p {
    grid-column: 7/13;
  }
  .grid:nth-child(even) .image {
    grid-column: 1/7;
  }
  @media (--md-n-below) {
    h2 {
      grid-column: span 12;
    }
    h3 {
      grid-column: span 12;
    }
    ul {
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
    ul {
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
