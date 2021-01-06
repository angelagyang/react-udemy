import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = { 
    persons: [
      {name: "Angela", age: 21}, 
      {name: "Andy", age: 19}
    ]
  }

  switchNameHandler = () => {
    // Don't do this! this.state.persons[1] = "Angela Yang";
    // console.log('clicked');
    this.setState({persons: [
      {name: "Angela", age: 22}, 
      {name: "Andy", age: 20}
    ]})
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age ={this.state.persons[0].age}></Person>
        <Person name={this.state.persons[1].name} age ={this.state.persons[1].age}>My hobbies: gaming</Person>

      </div>
    );

    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, "Does this work")); 
  }
}

export default App;
