import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // 配置式路由  注释就是约定式路由
  routes: [
    {
      path: '/',
      component: '@/pages/index',
      name: '首页',
      icon: 'HomeOutlined',
    },
    {
      path: '/users',
      component: '@/pages/users/index',
      name: '用户列表',
      icon: 'UserOutlined',
    },
    {
      path: '/goods',
      name: '商品',
      icon: 'ShoppingOutlined',
      routes: [
        // 二级路由
        { path: 'manage', component: '@/pages/goods/manage', name: '商品管理' },
        { path: 'brand', component: '@/pages/goods/brand', name: '商品品牌' },
      ],
    },
  ],
  /*
      官网位置：插件 》@umijs/plugin-layout
      配置文件config/config.ts 等于 .umirc.ts
    */
  layout: {
    name: '悟空系统',
    locale: true,
    layout: 'side',
  },
  // 本地配置开启 Mock     study: mock模拟本地接口
  mock: {},
  fastRefresh: {},
});
