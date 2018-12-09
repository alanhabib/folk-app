import React, { Component } from 'react';
import UserInput from "./Container/UserInput/UserInput";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import './App.css';


class App extends Component {
  state = {
    users: [],
    selectedUser: 0,
    showUserDetails: false,
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

  setSelectedUser = id => {
    this.setState({
      selectedUser: id,
      showUserDetails: true
    });
  };

  setShowUserDetails = (status) => {
    this.setState({ showUserDetails: status })
  }

  render() {
    if (this.state.showUserDetails) {
      const userFacts = this.state.users
        .slice(0, 5)
        .map(facts => {
          if (this.state.selectedUser === facts.id) {
            return (
              <div key={facts.id}>
                <Header />
                <div className="otherCardWrapper">
                  <ul className="otherCardContainer">
                    <li>Username: <span>{facts.username}</span></li>
                    <li>Email: <span>{facts.email}</span></li>
                    <li>Street address: <span>{facts.address.street}</span></li>
                    <li>Company: <span>{facts.company.name}</span></li>
                  </ul>
                </div>
                <UserInput className="userInputWrapper" />
                <button
                  onClick={() => this.setShowUserDetails(false)}
                  className="backButton">
                  Back
                  </button>
                <Footer />
              </div>

            );
          }
        });
      return userFacts;
    }
    // const filteredUsers = this.state.users.filter(
    //   (searchUser) => {
    //     return searchUser.name.indexOF(this.state.users) !== -1;
    //   }
    // )
    const listOfUsers = this.state.users.slice(0, 5).map(user => (
      <div
        onClick={() => this.setSelectedUser(user.id)}
        className="cardContainer"
        key={user.id}>
        <img src={"https://picsum.photos/200/300/?image=" + user.id * 25} alt="Random pictures" />
        <div
          className="cardText"
        >
          <p className="userName">
            {user.name}
          </p>
          <p className="userID">
            {user.id}
          </p>

        </div>
      </div>
    ));

    return (
      <div className="cardWrapper">
        <Header />
        {listOfUsers}
        <Footer />
      </div>
    );
  }
}

export default App;
