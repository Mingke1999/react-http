import React, { Component } from 'react'
import axios from "axios"
export default class AxiosProxy extends Component {

ProxyHandle = () =>{
    const headers = {
        'Content-Type': 'text/plain'
    };
    //not working 
    axios.get('/api/FingerUnion/list.php',{headers})
    .then(res=>{
        console.log(res.data)
    })
    .catch(error =>{
        console.log(error)
    })
   
}
render() {
    return (
      <div>
        <h2>AxiosProxy</h2>
        <button onClick={this.ProxyHandle}>Proxy</button>
      </div>
    )
  }
}
