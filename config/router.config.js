export default [
  {
    path: '/',
    component: '../layout/',
    routes: [
      {
        path: '/404',
        component: './404.js',
      },
      {
        path: '/',
        redirect: './index',
      },
      {
        path: '/index',
        component: './Index',
        title: '首页',
        name: 'title',
      },

      {
        path: '/open',
        component: './Open',
        title: '开发平台',
        name: 'title',
      },
      {
        path: '/mediaReports',
        component: './MediaReports',
        title: '媒体报道',
        name: 'title',
      },
      {
        path: '/aboutUs',
        component: './AboutUs',
        title: '关于我们',
        name: 'title',
      },
      {
        path: '/contactUs',
        component: './ContactUs',
        title: '联系我们',
        name: 'title',
      },
      {
        path: '/detail',
        component: './Detail',
        title: '详情',
        name: 'title',
      },
    ],
  },
]
