import React from 'react';
import './App.css';
import SignIn from './components/SignIn'
import Dashboard from './components/Dashboard'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      user: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState(prevState => ({
      loggedIn: !prevState.loggedIn
    }));
  }

  render() {
    let view;

    if (this.state.loggedIn === true) {
      view = <Dashboard handleSubmit={this.handleSubmit}/>
    }
    if (this.state.loggedIn === false) {
      view = <SignIn handleSubmit={this.handleSubmit}/>
    }

    return (
      <div className="App">
        {view}
      </div>
    );
  }
};
export default App;
