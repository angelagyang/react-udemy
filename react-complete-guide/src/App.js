import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = { 
    persons: [
      {id: '1', name: "Angela", age: 21}, 
      {id: '2', name: "Andy", age: 19}
    ], 
    showPersons: false
  }

  deletePersonHandler = (index) => {
    // const persons = this.state.persons.slice(); 
    const persons = [...this.state.persons];
    persons.splice(index, 1); 
    this.setState({persons: persons});
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id; 
    }); 
    
    // copy the person and reset its name
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value; 

    // copy the persons list and update its state 
    const persons = [...this.state.persons]; 
    persons[personIndex] = person; 

    this.setState({persons: persons}); 
  }


  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons; 
      this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white', 
      font: 'inherit', 
      border: '1px solid blue', 
      padding: '8px',
      cursor: 'pointer'
    };
    
    let persons = null; 
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              name={person.name} 
              age={person.age} 
              change={(event) => this.nameChangedHandler(event, person.id)}
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              ></Person>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button 
          onClick={this.togglePersonsHandler}
          style={style}>Switch Name</button>
        {persons}
        
      </div>
    );

    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, "Does this work")); 
  }
}

export default App;
