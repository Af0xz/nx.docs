// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NX',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'NX', // Usually your GitHub org/user name.
  projectName: 'NX', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
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
      navbar: {
        logo: {
          alt: 'logo',
          src: 'img/logo.png',
          width: "90px",
        },
        items: [
          {
            type: 'doc',
            docId: 'nx/nx',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://discord.gg/d6pRBjBUyn',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        logo: {
          alt: 'Meta Open Source Logo',
          src: 'img/logo.png',
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
              }
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['lua']
      },
    }),
};

module.exports = config;
