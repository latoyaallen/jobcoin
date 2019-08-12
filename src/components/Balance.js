import React from 'react';

const balanceText = "Jobcoin Balance"
const balance = "2372801.4738921"

const balanceContainer = {
  paddingTop: 10,
  border: '1px solid #ced0d9',
  width: 300,
  height: 150,
  margin: '0px auto 0px auto',
  textAlign: 'center',
}

const line = {
  borderTop: '1px solid #ced0d9',
  height: '15%',
  width: '100%',
}

const Balance = (props) => (
  <div style={balanceContainer}>
    {balanceText}
    <div style={line}></div>
    <div>{props.userName}</div>
    {props.balance}
  </div>
)

export default Balance;
