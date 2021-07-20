/* eslint-disable @typescript-eslint/no-var-requires */
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (req, res) => {
  // 代理目标地址
  // 这里使用 backend 主要用于区分 vercel serverless 的 api 路径
  if (req.url.startsWith('/api')) {
    target = process.env.GRIDSOME_API_URL
  }

  // 创建代理对象并转发请求
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      // 通过路径重写，去除请求路径中的 /api
      //   例如 /api/posts 将被转发到 http://106.75.10.28:1337/posts
      '^/api': ''
    }
  })(req, res)
}