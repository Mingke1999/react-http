import React, { Component } from 'react'
import axios from 'axios'

axios.interceptors.request.use(
    config =>{
        //console.log(config)
        if(config.method==="post"){
            //intercept requests, if use post then convert request to querystring
            config.data = new URLSearchParams(config.data).toString();
        }
        return config
    },error =>{
        return Promise.reject(error)
    }
)

export default class AxiosParams extends Component {

GetAxios1 = () =>{
    axios.get("http://iwenwiki.com/wapicovid19/ncov.php?key=62e34ad34025d5d5127135efa58d4ca8")
    .then(res=>{
        console.log(res.data)
    })
}
GetAxios2 = () =>{
    axios.get("http://iwenwiki.com/wapicovid19/ncov.php",{
        params:{
            key:"62e34ad34025d5d5127135efa58d4ca8"
        }
    })
    .then(res=>{
        console.log(res.data)
    })
    }
PostAxios = () =>{
    axios.post("http://iwenwiki.com/api/blueberrypai/login.php",{
        user_id:"iwen@qq.com",
        password:"iwen123",
        verification_code:"crfvw"
    })
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
        <h2>AXIOS Params</h2>
        <button onClick={this.GetAxios1}>GET AXIOS 1</button>
        <button onClick={this.GetAxios2}>GET AXIOS 2</button>
        <button onClick={this.PostAxios}>POST AXIOS</button>
      </div>
    )
  }
}
