import React, { useState } from 'react';
import { Icon } from '@material-ui/core';
import '../styles-sheets/ScreenChat.css';


const ScreenChat = () => {
  const [inputMessage, setInputMessage] = useState('');

  return (
    <div className='container-main-screenChat'>
      <button className='btn-return'> ❮ VOLVER</button>
      <h1 className='text-title-viewContact'>Chat reciente</h1>
      <div className='container-screem-chat'>
        {/* Aqui van los mensajes  */}
      </div>
      <div className='container-messageInput'>
        <input
          className='message-input'
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder='Escribir mensaje' />
        <Icon className='icon-attach'>
          attach_file
        </Icon>
        <button
          className='btn-sendMessage'
          type='submit'>
          ENVIAR
        </button>
      </div>
    </div>
  );
};

export default ScreenChat;