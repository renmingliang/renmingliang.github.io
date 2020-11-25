module.exports = {
  dest: '../../vuepress',
  title: 'Ming Liang',
  description: 'Just playing around',

  themeConfig: {
    nav: [
      { text: 'Guide', link: '/guide/' },
      { text: 'Framework', link: '/framework/' },
      { text: 'Contact', link: '/contact/' },
      { text: 'GitHub', link: 'https://github.com/renmingliang' },
    ],
    sidebar: {
      '/framework/': getFrameworkSidebar()
    }
  }
}

function getFrameworkSidebar() {
  return [
    {
      title: '技术栈',
      collapsable: false,
      children: [
        '',
        'vue/element-ui'
      ]
    },
    {
      title: '服务端渲染',
      collapsable: false,
      children: [
        'ssr/',
        'ssr/nextjs',
        'ssr/nuxtjs',
        'ssr/razzle'
      ]
    }
  ]
}