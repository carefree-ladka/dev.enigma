import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'JSEnigma',
  tagline: 'JS beyond your imagination',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/js.enigma/',

  // GitHub pages deployment config.
  organizationName: 'jsenigma', // Usually your GitHub org/user name.
  projectName: 'js.enigma', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/carefree-ladka',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'JSEnigma',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Learning',
        },
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
          items: [{ label: 'Learning', to: '/docs/intro' }],
        },
        {
          title: 'Community',
          items: [
            { label: 'Instagram', href: 'https://www.instagram.com/carefree_ladka/' },
            { label: 'LeetCode', href: 'https://leetcode.com/u/UP41Guy/' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kumpawan/' },
          ],
        },
        {
          title: 'More',
          items: [{ label: 'GitHub', href: 'https://github.com/carefree-ladka' }],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} JSEnigma, Built with Kadak Chai`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java'], 
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
