//eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import { Icon } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { firebaseApp } from '../Firebase/credenciales';
import { getFirestore, doc, setDoc, collection, getDocs } from 'firebase/firestore';
import HeaderChat from './HeaderChat';
import '../styles-sheets/ScreenChat.css';


const firestore = getFirestore(firebaseApp);

const ScreenChat = ({ mentorActive }) => {
  const [inputMessage, setInputMessage] = useState('');
  const [allMessages, setAllMessages] = useState('');

  const sendMessage = (e) => {
    e.preventDefault(); //Evito que se actualice 
    const docRef = doc(firestore, `mentors/${mentorActive}/messages/${new Date().getTime()}`);
    setDoc(docRef, {
      id: new Date().getTime(),
      message: inputMessage,
    });
    setInputMessage("");
    getAllMenssages();
  };

  async function getAllMenssages() {
    const arrMessages = [];
    const collectionRef = collection(firestore, `mentors/${mentorActive}/messages`);
    const messagesCifre = await getDocs(collectionRef);
    messagesCifre.forEach(msg => {
      arrMessages.push(msg.data())
    });
    console.log(arrMessages);
    setAllMessages(arrMessages)
  };

  useEffect(() => {
    getAllMenssages();
  }, [mentorActive])

  return (
    <div className='container-main-screenChat'>
      <button className='btn-return'> ❮ VOLVER</button>
      <h1 className='text-title-viewContact'>Chat reciente</h1>
      <HeaderChat nombreMentor={mentorActive} />
      <div className='container-screem-chat'>
        {allMessages ? allMessages.map(msg => {
          return <div className='msg'>
            <Avatar />
            <div className='container-msg'>
              <h4>Naimerith: </h4>
              {/* <h5 className='messsage-date'>
                Fecha y Hora: {new Date(msg.id).toLocaleString}
              </h5> */}
              <p>{msg.message}</p>
            </div>
          </div>
        })
          : null}
      </div>
      <form
        className='container-messageInput'>
        <input
          disabled={mentorActive ? false : true}
          className='message-input'
          type="text"
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder={`Escribir mensaje a ${mentorActive || ''}`} />
        <Icon className='icon-attach'>
          attach_file
        </Icon>
        <button
          onClick={sendMessage}
          disabled={mentorActive ? false : true}
          className='btn-sendMessage'
          type='submit'>
          ENVIAR
        </button>
      </form>
    </div>
  );
};

export default ScreenChat;