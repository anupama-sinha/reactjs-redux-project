import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      count:0
    };
    this.increase = this.increase.bind(this);
  }

  // increase(){
  //   this.setState({count : this.state.count +1})
  // }

  increase = () => {
    this.setState({count : this.state.count +1})
  }
    
  componentDidMount(){
    console.log("Component Did Mount");
  }

  render() {
    return (
      <div>
        <p>Hello Anupama</p>
        <p>Let's Learn React.js now - App-2</p>
        <button onClick={this.increase}>Increase</button>
        {/* <button onClick={() => {this.setState({count : this.state.count +1})}}>Increase</button> */}
        <p>Hi, My friend. U have increase the count : {this.state.count}</p>
        
      </div>
    );
  }
}