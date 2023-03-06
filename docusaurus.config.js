// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
require('dotenv').config()

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// Should be the name of the folder containing the docs folders
const mainFolder = 'main';

const { navItems, navPlugins } = require('./setup/getNav.js')(mainFolder);

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CICS 110',
  url: 'https://CICS110.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/110-image-light.png',

  projectName: 'CICS110.github.io',
  organizationName: 'CICS110',
  trailingSlash: false,

  markdown: {
    mermaid: true,
  },

  // Add live python code execution
  themes: ['docusaurus-live-brython', '@docusaurus/theme-mermaid'],

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
        path: `blog`,
        routeBasePath: 'blog',
        showReadingTime: true,
        blogTitle: "Announcements",
        blogDescription: "Announcements",
        blogSidebarTitle: "Recent Announcements"
      },
    ],
    require.resolve('docusaurus-lunr-search'),
    './src/plugins/webpack_mod'
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

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
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
            href: 'https://github.com/CICS110/CICS110.github.io',
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
            title: 'Material',
            items: [
              {
                label: 'Syllabus',
                href: '/main/information/syllabus',
              },
              {
                label: 'Schedule',
                href: '/main/information/schedule',
              },
              {
                label: 'Lectures',
                href: '/main/lectures',
              },
              {
                label: 'Labs',
                href: '/main/labs',
              },
            ],
          },
          {
            title: 'Assignments',
            items: [
              {
                label: 'Homework',
                href: '/main/assignments',
              },
              {
                label: 'Labs',
                href: '/main/labs',
              },
            ],
          },
          {
            title: 'Learning Systems',
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
        ],
        copyright: `Built by the CICS 110 Team (Using Docusaurus). Kobi was Here!`,
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
