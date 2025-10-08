import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

const config: Config = {
  title: "DevEnigma",
  tagline: "Code beyond boundaries",
  favicon: "img/favicon.ico",

  url: "https://carefree-ladka.github.io",
  baseUrl: "/dev.enigma/",

  organizationName: "devenigma",
  projectName: "dev.enigma",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  themes: ['@docusaurus/theme-mermaid'],
  markdown: {
    mermaid: true,
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/carefree-ladka",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "DevEnigma",
      logo: { alt: "DevEnigma Logo", src: "img/logo.svg" },
      items: [
        { type: "docSidebar", sidebarId: "tutorialSidebar", position: "left", label: "Learning" },
        { href: "https://www.linkedin.com/in/kumpawan/", label: "LinkedIn", position: "right" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        { title: "Docs", items: [{ label: "Learning", to: "/docs/intro" }] },
        {
          title: "Community",
          items: [
            { label: "Instagram", href: "https://www.instagram.com/carefree_ladka/" },
            { label: "LeetCode", href: "https://leetcode.com/u/Asyncy99/" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/kumpawan/" },
          ],
        },
        { title: "More", items: [{ label: "GitHub", href: "https://github.com/carefree-ladka" }] },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DevEnigma, Built with Kadak Chai ☕`,
    },
    prism: {
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: [ "java"],
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: {start: 'highlight-start', end: 'highlight-end'},
        },
        { className: 'code-block-error-line', line: 'error-line' },
        { className: 'code-block-success-line', line: 'success-line' },
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
