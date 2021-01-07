import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';

class App extends Component {
  state = {
    length: 0,
    word: ""
  }
  
  onChangeHandler = (event) => {
    this.setState({
      length: event.target.value.length,
      word: event.target.value
    })
  }
  
  deleteCharHandler = (index) => {
    console.log("DELETE " + index);
    const charsCopy = [...this.state.word.split('')];
    console.log(charsCopy); 
    charsCopy.splice(index, 1)     
    const newWord = charsCopy.join(''); 
    this.setState({word: newWord});
  }

  render() {
    let chars = null; 
    chars = (
      <div>
        {this.state.word.split('').map((char, index) => {
            return <CharComponent click={() => this.deleteCharHandler(index)} char={char}></CharComponent>
          }
        )}
      </div>
    )

    return (
      <div className="App">
        <ol>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <input onChange={(event) => this.onChangeHandler(event)} type="text"/>
        <p>{this.state.length}</p>
        <ValidationComponent 
          textLength={this.state.length}></ValidationComponent>
        {chars}
      </div>
    );
  }
}

export default App;
