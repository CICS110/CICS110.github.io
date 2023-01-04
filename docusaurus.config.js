// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CS 110',
  url: 'https://CS-110.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.
  projectName: 'CS-110.github.io',
  organizationName: 'CS-110',
  trailingSlash: false,

  // Add live python code execution
  themes: ['docusaurus-live-brython'],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'guides',
        path: 'guides',
        routeBasePath: 'guides',
        sidebarPath: require.resolve('./sidebars.js'),
      }),
    ],
    require.resolve('docusaurus-lunr-search')
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
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
        title: 'Home',
        // logo: {
        //   alt: 'My Site Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          { to: '/blog', label: 'Announcements', position: 'left' },
          {
            activeBaseRegex: `guides`,
            to: 'guides',
            position: 'left',
            label: "Guides",
          },
          {
            href: 'https://github.com/CS-110/CS-110.github.io',
            label: 'GitHub',
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
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'Piazza - Class Forum',
                href: 'https://piazza.com/',
              },
              {
                label: 'Moonami',
                href: 'https://umass.moonami.com/',
              },
              {
                label: 'Gradescope',
                href: 'https://www.gradescope.com/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub Repo',
                href: 'https://github.com/CS-110/CS-110.github.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus. (This is a placeholder))`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
