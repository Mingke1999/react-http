import React, { Component } from 'react'
import api from "./api"
export default class AxiosPacket extends Component {
componentDidMount(){
    api.getBanner().then(res=>{
        console.log(res.data);
    }).catch(error=>{
        console.log(error)
    })
}
  render() {
    return (
      <div>
        <h2>AXIOS PACKAGE</h2>
      </div>
    )
  }
}
