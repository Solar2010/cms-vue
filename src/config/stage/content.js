const contentRouter = {
  name: null,
  title: '分类管理',
  type: 'folder', // 类型: folder, tab, view
  icon: 'iconfont icon-tushuguanli',
  order: 3,
  inNav: true,
  children: [
    {
      title: '添加分类',
      type: 'view',
      name: 'ContentCreate',
      route: '/content/add',
      filePath: 'view/content/add.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
    {
      title: '分类列表',
      type: 'view',
      name: 'ContentList',
      route: '/content/list',
      filePath: 'view/content/list.vue',
      inNav: true,
      icon: 'iconfont icon-tushuguanli',
    },
  ],
}

export default contentRouter
