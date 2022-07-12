import React from 'react';
import { Avatar } from '@material-ui/core';
import '../styles-sheets/ScreenChat.css'

const Message = (props) => {
  return (
    <div
      className='msg'>
      <Avatar />
      <div className='container-msg'>
        <h4>Naimerith</h4>
        <p>{props.msg}</p>
      </div>
    </div>
  )
}

export default Message;