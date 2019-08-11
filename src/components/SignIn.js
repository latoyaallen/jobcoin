import React from 'react';

const welcomeText= "Welcome! Sign in with your Jobcoin address:"
const signInText= "Sign In"

const cardContainer = {
  paddingTop: 100,
  border: '1px solid #ced0d9',
  width: 500,
  height: 250,
  margin: '200px auto 200px auto',
  textAlign: 'center',
}

const line = {
  borderTop: '1px solid #ced0d9',
  height: '15%',
  width: '100%',
}

class SignIn extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form style={cardContainer} >
        <label>
          {welcomeText}
          <div style={line}></div>
          <input type="text" />
        </label>
        <button onClick={this.props.handleSubmit}>{signInText}</button>
      </form>
    );
  }
}
export default SignIn;

