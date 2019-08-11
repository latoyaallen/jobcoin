import React from 'react';
import Balance from './Balance'
import Send from './Send'

const sidebarContainer = {
  height: '100%',
  width: '33%',
}

const SideBar = () => (
  <div style={sidebarContainer}>
    <Balance />
    <Send />
  </div>
)

export default SideBar;
