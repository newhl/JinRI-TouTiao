import axios from 'axios'
import JSONbig from 'json-bigint'

// 创建一个axios的实例对象
const instance = axios.create({
  timeout: 1000,
  baseURL: 'http://ttapi.research.itcast.cn'
})
// 获取到服务器返回的数据，在相应拦截器之前执行
instance.defaults.transformResponse = [function (data) {
  try {
    // data 数据可能不是标准的 JSON 格式字符串，否则会导致 JSONbig.parse(data) 转换失败报错
    return JSONbig.parse(data)
  } catch (err) {
    // 无法转换的数据直接原样返回
    return data
  }
}]
// 拦截器
// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  console.log(response)
  // Do something with response data
  return response
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error)
})

// 导出axios
export default instance
