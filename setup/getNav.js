const content = require('./nav2.json')

const math = require('remark-math');
const katex = require('rehype-katex');

function get(mainFolder) {

  const navPlugins = content.map(item => [
    'content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    {
      id: item.id,
      path: `main/${item.id}`,
      routeBasePath: `main/${item.id}`,
      sidebarPath: require.resolve('./sidebars.js'),
      remarkPlugins: [math],
      rehypePlugins: [katex],
    },
  ])

  const navItems = content.map(item => ({
    to: `main/${item.id}`,
    position: item.position,
    label: item.label,
  }))

  return { navItems, navPlugins }
}


module.exports = get