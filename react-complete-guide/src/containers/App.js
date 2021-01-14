import React, { Component } from 'react';
import parentClass from './App.css';
import Persons from '../components/Persons/Persons'; 
import Cockpit from '../components/Cockpit/Cockpit';

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
    let persons = null; 

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons persons={this.state.persons} 
            clicked={this.deletePersonHandler} 
            changed={this.nameChangedHandler}></Persons>
        </div>
      );
    }
      
    
    return (
        <div className={parentClass.App}>
          <Cockpit showPersons={this.state.showPersons} 
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}> </Cockpit>
          {persons}
        </div>
      
    );

    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, "Does this work")); 
  }
}

export default App;
