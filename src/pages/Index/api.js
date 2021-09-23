import Https from '@/utils/https'

// 新闻
const queryNewsReq = params => Https.post('/api/v1/consulation/homePage/newsList', params)

export {
  queryNewsReq,
}
