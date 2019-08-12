import React from 'react';
import Header from './Header'
import SideBar from './SideBar'
import HistoryGraph from './HistoryGraph'

const row = {
  display: 'flex',
}

const column = {
  padding: '40px 20px ',
}

const Dashboard = (props) => (
  <div>
    <Header handleSubmit={props.handleSubmit} />
    <div style={row}>
      <div style={column}>
        <SideBar
          userName={props.userName}
          balance={props.balance}
        /></div>
    <div style={column}><HistoryGraph /></div>
  </div>
</div>
)

export default Dashboard;
