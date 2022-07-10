import React from 'react';
import { Icon } from '@material-ui/core';
import '../Contact/style-sheets-contact/ScreenChat.css';


const ScreenChat = () => {
    return (
        <div className='container-main-screenChat'>
            <button className='btn-return'> ❮ VOLVER</button>
            <h1 className='text-title-viewContact'>Chat reciente</h1>
            <div className='container-screem-chat'></div>
            <div className='container-messageInput'>
                <input className='message-input' type="text" placeholder='Escribir mensaje' />
                <Icon className='icon-attach'>
                    attach_file
                </Icon>
                <button className='btn-sendMessage'>ENVIAR</button>
            </div>
        </div>
    );
};

export default ScreenChat;