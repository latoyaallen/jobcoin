import React from 'react';
import Balance from './Balance'
import Send from './Send'

const sidebarContainer = {
  height: '100%',
  width: '33%',
}

const SideBar = (props) => (
  <div style={sidebarContainer}>
    <Balance
      userName={props.userName}
      balance={props.balance}
    />
    <Send />
  </div>
)

export default SideBar;
