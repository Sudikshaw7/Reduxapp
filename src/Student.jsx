import React, { Component } from 'react'

class Student extends Component {
    componentWillUnmount(){
        console.log("compnent will mount ")
    }
  render() {
    return (
      <div>
        Student
      </div>
    )
  }
}

export default Student