import React from 'react';

class HistoryGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = { transactions: [], userName: props.userName };
  }

  async componentDidMount() {
    try {
      const userName = this.state.userName;
      const response = await fetch(`http://jobcoin.gemini.com/prototype/api/addresses/${userName}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      this.setState({ transactions: json["transactions"] });
      console.log(this.state);
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.transactions.map(t => (
            <li>
              Date: {t.timestamp}  To {t.toAddress} From {t.fromAddress} for {t.amount}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}



export default HistoryGraph;
