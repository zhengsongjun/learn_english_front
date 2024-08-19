import axios from "axios";

interface Result<T> {
  code: number;
  msg: string;
  data: T;
  map: Record<string, any>;
}

const request = axios.create({
  baseURL: "http://localhost:8080",
  timeout: 3000,
  headers: { "X-Custom-Header": "foobar" },
});

// 添加请求拦截器
request.interceptors.request.use(
  function (config) {
    // 在发送请求之前做些什么
    return config;
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);

// 添加响应拦截器
request.interceptors.response.use(
  function (response) {
    console.log(response);
    if (response.status === 200) {
      return response.data.data;
    }
  },
  function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  },
);

export default request;
