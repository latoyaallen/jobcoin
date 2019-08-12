import React from 'react';
import './App.css';
import SignIn from './components/SignIn'
import Dashboard from './components/Dashboard'
import api from './Utils/api';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      userName: '',
      userData: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState(prevState => ({
      loggedIn: !prevState.loggedIn
    }));
    const input = e.target.children[0]

    if(input) {
      const name = input.value;
      this.setState({userName: name});

      api.getAddress(name)
      .then((res) => {
        this.setState({userData: res});
        console.log(this.state.userData["balance"]);
      });
    }
  }

  render() {
    let view;

    if (this.state.loggedIn === true) {
      view = <Dashboard
        handleSubmit={this.handleSubmit}
        userName={this.state.userName}
        balance={this.state.userData["balance"]}
      />
    }
    if (this.state.loggedIn === false) {
      view = <SignIn
        handleSubmit={this.handleSubmit}
        handleUserName={this.handleUserName}
      />
    }

    return (
      <div className="App">
        {view}
      </div>
    );
  }
};
export default App;
