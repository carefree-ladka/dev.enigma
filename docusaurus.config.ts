import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'DevEnigma',
  tagline: 'Code beyond boundaries',
  favicon: 'img/favicon.ico',

  url: 'https://carefree-ladka.in',
  baseUrl: '/',
  // organizationName: 'devenigma',
  // projectName: 'dev.enigma',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: ['@docusaurus/theme-mermaid'],
  markdown: {
    mermaid: true,
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/carefree-ladka',
        },
        blog: {
          showReadingTime: true,
          feedOptions: { type: ['rss', 'atom'], xslt: true },
          editUrl: 'https://github.com/carefree-ladka',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'interviews',
        path: 'interviews',
        routeBasePath: 'interviews',
        sidebarPath: './sidebars.interviews.ts',
        editUrl: 'https://github.com/carefree-ladka',
      },
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'DevEnigma',
      logo: { alt: 'DevEnigma Logo', src: 'img/logo.svg' },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Learning',
        },
        {
          to: '/interviews',
          label: 'Interview Experiences',
          position: 'left',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        { to: '/portfolio', label: 'Portfolio', position: 'left' },
        {
          href: 'https://www.linkedin.com/in/kumpawan/',
          label: 'LinkedIn',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Getting Started', to: '/docs/intro' },
            { label: 'Blog', to: '/blog' },
            { label: 'Portfolio', to: '/portfolio' },
            { label: 'Interview Experiences', href: '/interviews' },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/kumpawan/',
            },
            { label: 'GitHub', href: 'https://github.com/carefree-ladka' },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/carefree_ladka/',
            },
            { label: 'LeetCode', href: 'https://leetcode.com/u/Asyncy99/' },
          ],
        },
        {
          title: 'More',
          items: [{ label: 'Blog', to: '/blog' }],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DevEnigma · Built with Kadak Chai ☕`,
    },
    prism: {
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.vsDark,
      additionalLanguages: ['java'],
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        { className: 'code-block-error-line', line: 'error-line' },
        { className: 'code-block-success-line', line: 'success-line' },
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
