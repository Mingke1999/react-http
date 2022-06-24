import axios from 'axios'
import React, { Component } from 'react'
axios.defaults.baseURL='http://iwenwiki.com';

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
export default class Axios extends Component {
componentDidMount(){
    axios.get("api/blueberrypai/getIndexBanner.php")
    .then(res=>{
        console.log(res.data)
    })
    .catch(error=>{
        console.log(error)
    })
}
  render() {
    return (
      <div>
        <h2>AXIOS</h2>
      </div>
    )
  }
}
