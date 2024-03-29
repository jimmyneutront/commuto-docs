// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Commuto',
  tagline: '',
  url: 'http://commuto.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  // favicon: 'img/favicon.ico',
  organizationName: 'jimmyneutront', // Usually your GitHub org/user name.
  projectName: 'commuto-docs', // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/jimmyneutront/commuto-docs/tree/master/',
        },
        blog: false,
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
        title: 'Commuto',
        /*
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        */
        items: [
          {
            type: 'doc',
            docId: 'what-is-commuto',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/jimmyneutront/commuto-whitepaper/blob/main/commuto.pdf',
            label: 'Paper',
            position: 'right',
          },
          {
            href: 'https://github.com/jimmyneutront',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      footer: {
        // style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/what-is-commuto',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/jimmyneutront',
              },
            ],
          },
        ],
        copyright: `${new Date().getFullYear()} Commuto. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
