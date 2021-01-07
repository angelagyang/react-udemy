import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    usernames: [
      {username: "angelagyang"}, 
      {username: "cyyang"}, 
      {username: "andyyang"}
    ]
  }
  
  usernameChangeHandler = (event) => {
    this.setState(
      {usernames: [
        {username: event.target.value}, 
        {username: "cyyang"}, 
        {username: "andyyang"}
      ]}
    )
  }

  render() {
    return (
      <div className="App">
        <UserInput changed={this.usernameChangeHandler} username={this.state.usernames[0].username}></UserInput>
        <UserOutput username={this.state.usernames[0]} displayName={this.state.usernames[0].username}></UserOutput>
        <UserOutput username={this.state.usernames[1]} displayName={this.state.usernames[1].username}></UserOutput>
        <UserOutput username={this.state.usernames[2]} displayName={this.state.usernames[2].username}></UserOutput>
      </div>
    );
  }
}

export default App;
