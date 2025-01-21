import React, { Component } from 'react'

export default class Testcompone extends Component {
    componentDidMount(){
        console.log("Component did mount");
    }

    componentDidUpdate(prevProps, PreveState) {
        console.log("Component did update");
    }
  render() {
    return (
      <div>Testcompone</div>
    )
  }
}
