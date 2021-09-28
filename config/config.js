import pageRoutes from './router.config'
import proxy from './proxy.config'
import defaultSetting from '../src/defaultSettings'

const isDev = process.env.NODE_ENV === 'production'

const { title, primaryColor } = defaultSetting

export default {
  treeShaking: true,
  base: '/',
  publicPath: './',
  // history: 'hash',
  history: 'browser',
  hash: true,
  devtool: isDev ? 'cheap-module-source-map' : 'cheap-module-eval-source-map',
  outputPath: './limao',

  // externals: {},
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        extends: 'eslint-config-umi',
        title,
        useLocale: true, // 设置title
        dynamicImport: { webpackChunkName: true },
        dll: true,
        locale: {
          // enable: true,
          default: 'zh-CN',
          baseNavigator: true, // 为true时，用navigator.language的值作为默认语言
          antd: true,
        },
      },
    ],
    // 是否启用antd的<LocaleProvider />
    // 这里暂时还没有添加配置，该插件还不会有作用，我们会在后面的课程按照需求打开相应的配置
    // [
    //   'umi-plugin-pro-block',
    //   {
    //     moveMock: false,
    //     moveService: false,
    //     modifyRequest: true,
    //     autoAddMenu: true,
    //   },
    // ],
  ],
  // 加入 theme 定义
  theme: {
    '@primary-color': primaryColor,
  },
  autoprefixer: {
    // flexbox: 'no-2019',
    flexbox: true,
  },
  targets: { ie: 10 },
  proxy,
  routes: pageRoutes,
  manifest: {
    basePath: './',
  },
  // ssr: true,
}
