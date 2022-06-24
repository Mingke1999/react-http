import React, { Component } from 'react'


export default class FetchGetPost extends Component {
constructor(){
  super();
  this.state={
    user_id:"iwen@qq.com",
    password:"iwen123",
    verification_code:"crfvw"
  }
}
getHandle =()=>{
    //default as GET
    fetch("http://iwenwiki.com/wapicovid19/ncov.php?key=62e34ad34025d5d5127135efa58d4ca8")
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    })
    }
postHandle =()=>{
    /**
     * request is receiving "user_id:=iwen@qq.com&password=iwen123..""However object is passed
     * Then need to convert
     */
    
    //querystring is not working, URLSearchParams is used to convert an object to querystring
    const queryString = new URLSearchParams(this.state).toString();
    //console.log(queryString);
    //Object.keys(params).map(key => key + '=' + params[key]).join('&');
    
    fetch("http://iwenwiki.com/api/blueberrypai/login.php",{
        method:'POST',
        body:queryString//"user_id=iwen@qq.com&password=iwen123&verification_code=crfvw"
        ,
        headers:{
            "Content-Type":"application/x-www-form-urlencoded",
        }
    }).then(res=>res.json())
    .then((data)=>{
        console.log(data)
    })
}
  render() {
    return (
      <div>
        <h3>GET and POST</h3>
        <button onClick={this.getHandle}>GET</button>
        <button onClick={this.postHandle}>POST</button>
      </div>
    )
  }
}
