import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
// withMermaid does defineConfig:
export default withMermaid({
  title: "FediMod FIRES",
  description: "Fediverse moderation Intelligence Replication Endpoint Server",
  head: [
    ["meta", { property: "og:image", content: "/opengraph-banner.png" }],
    [
      "meta",
      {
        property: "og:image:alt",
        content:
          "FediMod FIRES - Fediverse Intelligence Replication Endpoint Server. A protocol and reference server implementation for storing and distributing moderation advisories and recommendations over time for the Fediverse.",
      },
    ],
    ["meta", { property: "og:image:width", content: "1024" }],
    ["meta", { property: "og:image:height", content: "512" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:site_name", content: "FediMod FIRES" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "Fediverse moderation Intelligence Replication Endpoint Server",
      },
    ],
  ],
  transformPageData(pageData) {
    pageData.frontmatter.head ??= [];
    pageData.frontmatter.head.push([
      "meta",
      {
        property: "og:title",
        content:
          pageData.frontmatter.layout === "home"
            ? `FediMod FIRES`
            : `${pageData.title} | FediMod FIRES`,
      },
    ]);
  },
  themeConfig: {
    footer: {
      message:
        'Released under the <a href="https://github.com/fedimod/fires/blob/main/LICENSE">AGPL License</a>.',
      copyright:
        'Copyright © 2024 <a href="/contributors/">FediMod FIRES Project</a>',
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
            text: "Under Development!",
            link: "/manuals/",
          },
          /* {
            text: "Reference Server",
            link: "/manuals/reference-server/",
          },
          {
            text: "Example Provider",
            link: "/manuals/example-provider/",
          },
          {
            text: "Example Consumer",
            link: "/manuals/example-consumer/",
          },
          */
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
            {
              text: "Advisories & Recommendations",
              link: "/concepts/advisories-and-recommendations",
            },
            { text: "Filters", link: "/concepts/filters" },
            { text: "Labels", link: "/concepts/labels" },
            { text: "Retractions", link: "/concepts/retractions" },
          ],
        },
        {
          text: "Definitions",
          items: [
            {
              text: "Data Provider",
              link: "/concepts/terms/data-provider",
            },
            {
              text: "Data Consumer",
              link: "/concepts/terms/data-consumer",
            },
            {
              text: "Label Provider",
              link: "/concepts/terms/label-provider",
            },
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

      "/manuals/": [
        {
          text: "Manuals",
          link: "/manuals/",
          items: [],
        },
        {
          text: "Reference Server",
          items: [
            {
              text: "Introduction",
              link: "/manuals/reference-server/",
            },
          ],
        },
        {
          text: "Example Provider",
          items: [
            {
              text: "Introduction",
              link: "/manuals/example-provider/",
            },
          ],
        },
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
