import React from 'react';

const joinText = "Join Jobcoin"
const signOutText = "Sign Out"

const line = {
  borderTop: '1px solid #ced0d9',
  height: '15%',
  width: '100%',
}

const signOut = {
  paddingLeft: 900,
  color: 'blue',
}

const textContainer = {
  display: 'flex',
  paddingLeft: '150px',
}

const Header = (props) => (
  <div>
    <div style={textContainer}>
      <p>{joinText}</p>
      <p style={signOut} onClick={props.handleSubmit} >{signOutText}</p>
    </div>
    <div style={line}></div>
  </div>
)

export default Header;
