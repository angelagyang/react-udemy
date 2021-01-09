import React, { Component } from 'react';
import parentClass from './App.css';
import Person from './Person/Person';

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
    let btnClass = [parentClass.Button]; 

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

      // dynamic styling
      // style.backgroundColor = 'red'; 
      // style[':hover'] = {
      //   backgroundColor: 'salmon', 
      //   color: 'black'
      // }
      btnClass.push(parentClass.Red);
    }
    
    let classes = [] // class names defined in CSS file 
    if (this.state.persons.length < 2) {
      classes.push('red'); 
    }
    if (this.state.persons.length < 1) {
      classes.push('bold');
    }
    
    return (
        <div className={parentClass.App}>
          <h1>Hi, I'm a React App</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button className={btnClass.join(' ')} alt={this.state.showPersons}
            onClick={this.togglePersonsHandler}
           >Toggle Persons</button>
          {persons}
          
        </div>
      
    );

    // return React.createElement('div', {className:'App'}, React.createElement('h1', null, "Does this work")); 
  }
}

export default App;
