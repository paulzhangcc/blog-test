module.exports = {
  base: '/blog-test/',
  title: '张晋峰',
  description: '张晋峰的博客',
  themeConfig: {
    // 你的GitHub仓库，请正确填写
    repo: 'https://github.com/paulzhangcc',
    // 自定义仓库链接文字。
    repoLabel: 'paulzhangcc',
    lastUpdated: 'Last Updated',
    displayAllHeaders: true,
    sidebarDepth: 2,
    nav: [
      {text: 'Home', link: '/'}, {text: '博客', link: '/blog/'}, {text: '生活', link: '/life/'},
      {
        text: '快速链接',
        items: [
          {text: '联系我们', link: '/contact'},
          {text: '简书', link: 'https://www.jianshu.com/u/99025d7b7f6a'}
        ]
      },
    ],
    sidebar: {
      '/blog/': [
        '',     /* /foo/ */
        'FirstBlog',  /* /foo/one.html */
        'SecondBlog'   /* /foo/two.html */
      ],

      '/life/': [
        '',      /* /bar/ */
        'FirstLife', /* /bar/three.html */
        'SecondLife'   /* /bar/four.html */
      ],

      // fallback
      '/': [
        '',        /* / */
        'contact', /* /contact.html */
      ]
    }
  }
}
