import React, { Component } from 'react'

export default class UseFetch extends Component {
constructor(){
    super();
    this.state = {
        banner:[]
    }
}
componentDidMount(){
    fetch("http://iwenwiki.com/api/blueberrypai/getIndexBanner.php")
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        this.setState({
            banner:data.banner
        })
    })
}
render() {
    return (
      <div>
        <h2>USING FETCH</h2>
        <ul>
        {
            this.state.banner.map((ele,index) => {
                return <li key={index}>{ele.title}</li>
            })
        }
        </ul>
      </div>
    )
  }
}
