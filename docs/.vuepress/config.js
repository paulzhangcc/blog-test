module.exports = {
  base: '/blog-test/',
  title: '张晋峰',
  description: '张晋峰的博客',
  themeConfig: {
    // 你的GitHub仓库，请正确填写
    repo: 'https://github.com/paulzhangcc',
    // 自定义仓库链接文字。
    repoLabel: 'paulzhangcc',
    nav: [
      {text: 'Home', link: '/'},
      {text: 'FirstBlog', link: '/blog/FirstBlog.md'}
    ],
    sidebar: [
      ['/', '首页'],
      ['/blog/FirstBlog.md', '我的第一篇博客'],
      ['/blog/SecondBlog.md', '我的第二篇博客']
    ],
  }
}
