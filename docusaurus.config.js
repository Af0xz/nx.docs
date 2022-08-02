// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NX',
  tagline:
    '[NX] is a modern FiveM Framework based on modern technologies such as TypeScript, React and more...',
  url: 'https://nxf.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'niiyy',
  projectName: 'NX',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { name: 'keywords', content: 'fivem, framework, gta, nx' },
        {
          name: 'description',
          content:
            '[NX] is a modern FiveM Framework based on modern technologies such as TypeScript, React and more...',
        },
      ],
      navbar: {
        logo: {
          alt: 'logo',
          src: 'img/logopng.png',
          width: '90px',
        },
        items: [
          {
            type: 'doc',
            docId: 'nx/nx',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/niiyy/NX',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://discord.gg/d6pRBjBUyn',
            label: 'Discord',
            position: 'right',
          },
          {
            href: 'https://twitter.com/nniiiiyy',
            position: 'right',
            className: 'header-twitter-link',
            'aria-label': 'Twitter',
          },
        ],
      },
      footer: {
        style: 'light',
        logo: {
          alt: 'Meta Open Source Logo',
          src: 'img/logopng.png',
          href: 'https://discord.gg/d6pRBjBUyn',
          width: 160,
          height: 51,
        },
        copyright: `Copyright © ${new Date().getFullYear()} niiy.`,
        links: [
          {
            title: 'About me',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/d6pRBjBUyn',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/nniiiiyy',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['lua'],
      },
    }),
}

module.exports = config
