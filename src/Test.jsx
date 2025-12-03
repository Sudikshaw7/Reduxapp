import React, { Component } from "react";
import Student from "./Student";

export default class Test extends Component {
  constructor() {
    // super();
    // console.log("constructor");
    // const obj = {
    //   data: this.state,
    // };
    
    super(); // for component did update
    // this.state = {
    //   count: 0,
    // };
this.state={
  show:false
}
    console.log("constructor");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("component did update");
      if (this.props.userID !== prevProps.userID) {
    this.fetchData(this.props.userID);
  }
}

  componentDidMount() {
    console.log("component Did Mount");
  }
  render() {
    console.log("render");
    return (
      <>
        <h1> Component Life cycle methods</h1>
        <button style={{ margin: "10px" }}>Load component</button>
        <button style={{ margin: "10px" }}>Load component</button>
        <button>Remove(unMount) component</button>
        <h4>count:{this.state.count}</h4>
        {/* <button onClick={()=>this.setState({count:1})}>Increment</button> */}
        <button onClick={()=>this.setState({show:!this.state.show})}>toggle</button>
     
        {
          this.state.show ? <student /> : "Child Component"
        }
      </>
    );
  }
}
