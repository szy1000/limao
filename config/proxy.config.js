let target = ''
switch (process.env.UMI_ENV) {
  default:
    target = 'http://10.45.29.90/api'
}


export default {
  '/api': {
    // 开发环境代理
    target,
    changeOrigin: true,
    pathRewrite: { '^/api': '' },
  },
}
