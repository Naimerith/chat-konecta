import React from 'react';
import { Avatar } from '@material-ui/core';

const Messages = ({ messagesFb }) => {
  return (
    <div className='message__info'>

      <Avatar />
      <div>
        <h4>Nombre Usuario</h4>
        <h5 className='messsage-date'>
          Fecha y Hora: {new Date(messagesFb.id).toLocaleString}
        </h5>
        <p>Mensaje: {messagesFb.message}</p>
      </div>
    </div>
  )
}

export default Messages