export interface Project {
  name: string
  description: string
  points: string[]
  image: string
  url: string
  repo_url: string
  tech: string[]
}

const Projects: Project[] = [
  {
    name: 'RedditLattice',
    description: `A user friendly web application to browse image based subreddits from reddit.com`,
    points: [
      `Loads of options for user customizations.`,
      `Implemented quick image loading by progressively loading images and sizing them efficiently.`,
      `Provided instant image loads and reduced network usage for frequently visited subreddits by building a smart caching solution.`,
      `Implemented Beautiful and Custom UI for a native app like feel, custom pull to refresh, list animations and page loaders.`,
      `Resizing Images on the fly using a custom nodejs server resulting in 3x-5x smaller images.`,
      `Enhances UX for customers by saving relevant user searches and favourites for quick access.`,
      `Uses Service Workers and WebManifest to be fully installable as an application and provide offline functionality.`,
    ],
    image: 'redditlattice.webp',
    tech: ['vue3', 'nuxt3', 'vuetify', 'workbox', 'service-workers', 'nodejs'],
    url: 'https://redditlattice.netlify.app/',
    repo_url: 'https://github.com/vanillacode314/redditlattice',
  },
  {
    name: 'JustInvoice',
    description:
      'An intuitive invoice manager that works completely in the browser and offline',
    image: 'justinvoice.webp',
    tech: ['svelte', 'sveltekit', 'tailwindcss', 'daisyui'],
    points: [
      'Auto formats to print invoices in a concise form.',
      'Uses Service Workers and WebManifest to be fully installable as an application and provide offline functionality.',
    ],
    url: 'https://justinvoice.netlify.app',
    repo_url: 'https://github.com/vanillacode314/justinvoice',
  },
  /* { */
  /*   name: "MTGPackSimulator", */
  /*   description: "Simulate draft booster packs for Magic The Gathering", */
  /*   /* image: "justinvoice", */
  /*   tech: ["svelte", "sveltekit", "tailwindcss", "daisyui"], */
  /*   url: "https://mtgpacksim.bluemonkeygaming.com/sets", */
  /* }, */
  /* { */
  /*   name: "JustLearn", */
  /*   description: */
  /*     "A Free and Open source application where students can create and give tests and share them with the world.", */
  /*   image: true, */
  /*   tech: ["svelte", "sveltekit"], */
  /*   url: "https://justlearn.netlify.app", */
  /*   repo_url: "https://github.com/vanillacode314/justlearn", */
  /* }, */
  /* { */
  /*   id: "vtt", */
  /*   name: "VanillaTimeTracker", */
  /*   description: "A Free and Open source Time Tracker for Freelancers.", */
  /*   image: true, */
  /*   tech: ["svelte", "sveltekit", "kahi ui"], */
  /*   url: "https://vanillatimetracker.netlify.app", */
  /*   repo_url: "https://github.com/vanillacode314/vanillatimetracker", */
  /* }, */
  /* { */
  /*   name: "RemoteGamepad", */
  /*   description: */
  /*     "A Free and Open source application that turns your mobile device into a remote gamepad for your computer. This is the client", */
  /*   image: true, */
  /*   tech: ["svelte", "sveltekit", "capacitorjs", "websockets"], */
  /*   url: "https://github.com/vanillacode314/remotegamepad/releases", */
  /*   repo_url: "https://github.com/vanillacode314/remotegamepad", */
  /* }, */
  /* { */
  /*   name: "RemoteGamepad\nServer", */
  /*   description: */
  /*     "A Free and Open source application that turns your mobile device into a remote gamepad for your computer. This is the server", */
  /*   image: true, */
  /*   tech: ["rust", "enigo", "clap-rs", "websockets"], */
  /*   url: "https://github.com/vanillacode314/remotegamepad-server/releases", */
  /*   repo_url: "https://github.com/vanillacode314/remotegamepad-server", */
  /* }, */
]
export default Projects
