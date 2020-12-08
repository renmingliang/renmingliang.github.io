module.exports = {
  dest: './blog',
  title: 'Ming Liang',
  description: 'Just playing around',

  themeConfig: {
    nav: require('./nav'),
    sidebar: {
      '/guide/': getGuideSidebar(),
      '/framework/': getFrameworkSidebar()
    }
  }
}

function getGuideSidebar() {
  return  [
    '',
    'permission'
  ]
}

function getFrameworkSidebar() {
  return [
    {
      title: '框架应用',
      collapsable: false,
      children: [
        '',
        'vue',
        'react',
        'nodejs'
      ]
    },
    {
      title: '框架示例',
      collapsable: false,
      children: [
        'vue-event-bus',
        'vue-element-ui',
      ]
    },
    {
      title: '跨平台',
      collapsable: false,
      children: [
        'react-native',
        'electron'
      ]
    },
    {
      title: '可视化',
      collapsable: false,
      children: [
        'canvas',
        'svg'
      ]
    }
  ]
}