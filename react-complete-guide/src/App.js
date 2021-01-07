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

  switchNameHandler = (newName) => {
    // Don't do this! this.state.persons[1] = "Angela Yang";
    // console.log('clicked');
    this.setState({persons: [
      {name: newName, age: 22}, 
      {name: "Andy", age: 20}
    ]})
  }

  nameChangedHandler = (event) => {
    this.setState({persons: [
      {name: event.target.value, age: 22}, 
      {name: "Andy", age: 20}
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white', 
      font: 'inherit', 
      border: '1px solid blue', 
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button 
          onClick={() => this.switchNameHandler("HELLO")}
          style={style}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age ={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, "Hello!")}
          change={this.nameChangedHandler}></Person>
        <Person 
          name={this.state.persons[1].name} 
          age ={this.state.persons[1].age}
          click={this.switchNameHandler}>My hobbies: gaming</Person>

      </div>
    );

    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, "Does this work")); 
  }
}

export default App;
