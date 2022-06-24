import React, { Component } from 'react'
//https://github.com/facebook/create-react-app/blob/main/docusaurus/docs/proxying-api-requests-in-development.md

export default class FetchProxy extends Component {
httpHandle = () =>{
    fetch("/api/FingerUnion/list.php")
    .then(res=>res.json())
    .then(data=>{
        //Cross-Origin Request Blocked
        console.log(data)
    })
}
render() {
    return (
      <div>
        <h2>Fetch Proxy</h2>
        <button onClick={this.httpHandle}>HTTP</button>
      </div>
    )
  }
}
