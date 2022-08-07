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
          editUrl: 'https://github.com/niiyy/nx.docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/niiyy/nx.docs/tree/main/',
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
      announcementBar: {
        id: 'join_us_discord',
        content:
          '⭐️ Join us on <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/d6pRBjBUyn">Discord</a>.',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
      },
      navbar: {
        style: 'dark',
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
            label: 'Docs',
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
            label: 'Twitter',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} niiy.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['lua'],
      },
    }),
}

module.exports = config
