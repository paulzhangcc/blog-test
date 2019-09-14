module.exports = {
  base: '/',
  title: '宇电经纬智慧用电平台',
  description: '宇电经纬智慧用电平台文档',
  themeConfig: {
    // 你的GitHub仓库，请正确填写
    //repo: 'https://github.com/paulzhangcc',
    //repoLabel: 'paulzhangcc',
    lastUpdated: 'Last Updated',
    displayAllHeaders: false,
    sidebarDepth: 3,
    nav: [
      {text: '首页', link: '/'},
      {text: '白皮书', link: '/manager/'},
      {text: '常见问题', link: '/problem/'},
      {
        text: '其他',
        items: [
          {text: '关于我们', link: '/other/about-us'},
          {text: '联系我们', link: '/other/contact'},
        ]
      },
      {
        text: '快速链接',
        items: [
          {text: '官网', link: 'http://www.cmematrix.com/'},
          {text: 'PC', link: 'http://web.cmematrix.com/'},
          {text: 'H5', link: 'http://app.cmematrix.com/'},
        ]
      },
    ],
    sidebar: {
      '/manager/': [
        '',
        'role',
        'menu',
        'project',
        'user',
        'data',
        'ebox',
        'scene',
      ],
      '/problem/': [
        '',
      ],
      // fallback
      '/other/': [
        'about-us',
        'contact',
      ]
    }
  }
}
