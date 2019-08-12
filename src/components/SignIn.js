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

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }


  render() {
    return (
      <div>
        <form style={cardContainer} onSubmit={this.props.handleSubmit}>
          <input type="text" />
          <button>{welcomeText}</button>
        </form>
      </div>
    );
  }
}
export default SignIn;

