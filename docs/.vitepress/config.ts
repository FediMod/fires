import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FediMod FIRES",
  description: "Fediverse moderation Intelligence Replication Endpoint Server",
  themeConfig: {
    footer: {
      message:
        'Released under the <a href="https://github.com/fedimod/fires/blob/main/LICENSE">AGPL License</a>.',
      copyright:
        'Copyright © 2024 <a href="/contributors">FediMod FIRES Project</a>',
    },

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Concepts", link: "/concepts/", activeMatch: "^/concepts" },
      { text: "Protocol Reference", link: "/reference/protocol/" },
      { text: "Conformance Tests", link: "/reference/testing/" },
      {
        text: "Manuals",
        items: [
          {
            text: "Reference Server",
            link: "/manuals/reference-server/",
          },
          {
            text: "Example Publisher",
            link: "/manuals/example-publisher/",
          },
          {
            text: "Example Consumer",
            link: "/manuals/example-consumer/",
          },
        ],
      },
    ],

    sidebar: {
      "/concepts/": [
        {
          text: "Concepts",
          link: "/concepts/",
          items: [
            {
              text: "Firewall-based Federation Management",
              link: "/concepts/federation-firewalls",
            },
            { text: "Labelling", link: "/concepts/labels" },
            {
              text: "Advisories & Recommendations",
              link: "/concepts/advisories-and-recommendations",
            },
            { text: "Retractions", link: "/concepts/retractions" },
          ],
        },
        {
          text: "Project Background",
          items: [
            {
              text: "Introduction",
              link: "/concepts/background/",
            },
            {
              text: "Goals & Objectives",
              link: "/concepts/background/goals-and-objectives",
            },
            {
              text: "Historical Context",
              link: "/concepts/background/historical-context",
            },
            {
              text: "Prior Art",
              link: "/concepts/background/prior-art",
            },
            {
              text: "Why Not...?",
              link: "/concepts/background/why-not",
            },
          ],
        },
      ],
      "/reference/": [
        {
          text: "Reference",
          items: [
            {
              text: "Conformance Tests",
              link: "/reference/testing/",
            },
            {
              text: "Protocol",
              collapsed: true,
              items: [
                {
                  text: "Introduction",
                  link: "/reference/protocol/",
                },
              ],
            },
          ],
        },
      ],

      "/manuals/reference-server": [
        {
          text: "Reference Server",
          items: [
            {
              text: "Introduction",
              link: "/manuals/reference-server/",
            },
          ],
        },
      ],
      "/manuals/example-publisher": [
        {
          text: "Example Publisher",
          items: [
            {
              text: "Introduction",
              link: "/manuals/example-publisher/",
            },
          ],
        },
      ],
      "/manuals/example-consumer": [
        {
          text: "Example Consumer",
          items: [
            {
              text: "Introduction",
              link: "/manuals/example-consumer/",
            },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/fedimod/fires" },
      { icon: "mastodon", link: "https://mastodon.social/@fedimod" },
    ],
  },
});
