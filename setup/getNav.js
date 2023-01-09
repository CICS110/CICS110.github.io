const content = require('./nav.json')

function get(mainFolder) {

  const navPlugins = content.map(item => [
    'content-docs',
    /** @type {import('@docusaurus/plugin-content-docs').Options} */
    {
      id: item.id,
      path: `${mainFolder}/${item.id}`,
      routeBasePath: item.id,
      sidebarPath: require.resolve('./sidebars.js'),
    },
  ])

  const navItems = content.map(item => ({
    to: item.id,
    position: item.position,
    label: item.label,
  }))

  return { navItems, navPlugins }
}


module.exports = get