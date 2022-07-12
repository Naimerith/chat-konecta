import React from 'react';
import { Avatar } from '@material-ui/core';
import '../styles-sheets/ScreenChat.css'

const Message = (props) => {
    return (
        <div className='container-screem-chat'>
            <div
                className='msg'>
                <Avatar />
                <div className='container-msg'>
                    <h4>Naimerith</h4>
                    {/* <h5 className='messsage-date'>
                Fecha y Hora: {new Date(msg.id).toLocaleString}
              </h5> */}
                    <p>{props.msg}</p>
                </div>
            </div>
        </div>
    )
}

export default Message