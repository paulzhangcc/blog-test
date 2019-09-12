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
    nav: [
      {text: 'Home', link: '/'},
      {
        text: 'Blog',
        items: [
          {text: 'FirstBlog', link: '/blog/FirstBlog.md'},
          {text: 'SecondBlog', link: '/blog/SecondBlog.md'},
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
