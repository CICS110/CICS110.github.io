// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// Should be the name of the folder containing the docs folders
const mainFolder = 'main';

const { navItems, navPlugins } = require('./setup/getNav.js')(mainFolder);

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CS 110',
  url: 'https://CS-110.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  projectName: 'CS-110.github.io',
  organizationName: 'CS-110',
  trailingSlash: false,

  // Add live python code execution
  themes: ['docusaurus-live-brython'],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  clientModules: [require.resolve('./src/css/custom.css')],

  plugins: [
    ...navPlugins,
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'blog',
        path: `${mainFolder}/blog`,
        routeBasePath: 'blog',
        showReadingTime: true,
      },
    ],
    require.resolve('docusaurus-lunr-search'),
  ],

  // I don't know why this can't be removed?
  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        theme: false,
      },
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
          { to: '/blog', label: 'Announcements', position: 'left' },
          ...navItems,
          {
            href: 'https://github.com/CS-110/CS-110.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      footer: {
        style: 'dark',
        links: [
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
      colorMode: {
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;
