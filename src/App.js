import React, { Component } from 'react';
import './App.css';
import "./Users.css";


class App extends Component {
  state = {
    users: [],
    selectedUser: -1
  };

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = () => {
    // console.log(id)
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        this.setState({ users: data });
      })
      .catch(error => console.log(error));
  };

  getUser = id => {
    this.setState({ selectedUser: id });
  };

  render() {
    const listOfUsers = this.state.users.slice(0, 5).map(user => (
      <p
        key={user.id}
        className="userBox"
        onClick={this.getUser.bind(this, user.id)}
      >
        {user.id}
        {user.name}
      </p>
    ));

    if (this.state.selectedUser > -1) {
      const userFacts = this.state.users.slice(0, 5).map(facts => {
        if (this.state.selectedUser === facts.id) {
          return (
            <p key={facts.id}>
              {facts.name}
              {facts.username}
              {facts.email}
              {facts.address.street}
              {facts.company.name}
            </p>
          );
        }
      });
      return userFacts;
    }

    return (
      <div className="App">
        {listOfUsers}
      </div>
    );
  }
}

export default App;
