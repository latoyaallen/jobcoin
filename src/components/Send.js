import React from 'react';

const sendText = "Send Jobcoin"
const destinationText = "Destination Address"
const amountText = "Amount to Send"
const s = "s"

const send = {
  paddingTop: 10,
  border: '1px solid #ced0d9',
  width: 300,
  height: 350,
  margin: '20px auto 0px auto',
  textAlign: 'center',
}

const line = {
  borderTop: '1px solid #ced0d9',
  height: '15%',
  width: '100%',
}

const buttonContainer = {
  textAlign: 'center',
  paddingTop: 30,
}

const button = {
  backgroundColor: 'grey',
}

const Send = () => (
  <div>
    <form style={send} >
      <label>
        {sendText}
        <div style={line}></div>
        <p>{destinationText}</p>
        <input type="text" />
        <p>{amountText}</p>
        <input type="text" />
      </label>
      <div style={buttonContainer}>
        <button style={button}>{sendText}{s}</button>
      </div>
    </form>
  </div>
)

export default Send;
