import pageRoutes from './router.config'
import proxy from './proxy.config'
import defaultSetting from '../src/defaultSettings'

const path = require('path')

const isDev = process.env.NODE_ENV === 'production'

const { title, primaryColor } = defaultSetting

export default {
  treeShaking: true,
  base: '/',
  publicPath: './',
  history: 'hash',
  hash: true,
  devtool: isDev ? 'cheap-module-source-map' : 'cheap-module-eval-source-map',
  outputPath: './limao',
  devServer: {
    overlay: {
      warnings: true,
      error: true,
    },
  },

  externals: {

  },
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
    [
      'umi-plugin-pro-block',
      {
        moveMock: false,
        moveService: false,
        modifyRequest: true,
        autoAddMenu: true,
      },
    ],
  ],
  // 加入 theme 定义
  theme: {
    '@primary-color': primaryColor,
  },
  autoprefixer: {
    // flexbox: 'no-2019',
    flexbox: true,
  },
  // alias: {  // 开启就会报错
  //   '@component': path.resolve(__dirname, 'src/component'),
  // },
  targets: { ie: 10 },
  // chainWebpack: (config, { webpack }) => {
  //   config.module.rule('file')
  //     .test(/\.(gif|png|jpe?g|svg)$/i)
  //     .include
  //     .add(path.resolve(__dirname, '../src'))
  //     .end()
  //     .use('file-loader')
  //     .loader('image-webpack-loader')
  //     .options({
  //       mozjpeg: {
  //         progressive: true,
  //         quality: 65,
  //       },
  //       // optipng.enabled: false will disable optipng
  //       optipng: {
  //         enabled: false,
  //       },
  //       pngquant: {
  //         quality: '65-90',
  //         speed: 4,
  //       },
  //       gifsicle: {
  //         interlaced: false,
  //       },
  //       // the webp option will enable WEBP
  //       // webp: {
  //       //   quality: 75,
  //       // },
  //     })
  //   // config.plugins.delete('progress')// 删除进度条插件
  //   // config.module.rule('lint')
  //   //   .test(/\.js$/)
  //   //   .pre()
  //   //   .include
  //   //   .add('src')
  //   //   .end()
  //   // .use('eslint')
  //   // .loader('eslint-loader')
  //   // .options({
  //   //   rules: {
  //   //     semi: 'off'
  //   //   }
  //   // });
  //
  //   // config.plugins.optimization.minimizer([
  //   //   new UglifyJsPlugin({
  //   //     compress: {
  //   //       warnings: false,
  //   //       drop_debugger: true,
  //   //       drop_console: true,
  //   //     },
  //   //   }),
  //   // ])
  //
  //   // config.optimization
  //   //   .minimizer('js')
  //   //   .use(require.resolve('uglifyjs-webpack-plugin'), [
  //   //     {
  //   //       uglifyOptions: {
  //   //         warnings: false,
  //   //         compress: {
  //   //           drop_console: true,
  //   //           drop_debugger: true,
  //   //
  //   //         },
  //   //       },
  //   //     },
  //   //   ])
  // },
  proxy,
  routes: pageRoutes,
  manifest: {
    basePath: './',
  },
  // ssr: true,
}
