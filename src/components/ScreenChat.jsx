import React, { useState, useEffect } from 'react';
import { Icon } from '@material-ui/core';
import { firebaseApp } from '../Firebase/credenciales';
import { getFirestore, doc, setDoc, collection, getDocs } from 'firebase/firestore';
import '../styles-sheets/ScreenChat.css';
import HeaderChat from './HeaderChat';
import Messages from './Messages';

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
      // usuario: user.displayname,
      // foto: user.photoURL ,
    });
    setInputMessage(" ");
  };

  async function getAllMenssages() {
    const arrMessages = [];
    const collectionRef = collection(firestore, `mentors/${mentorActive}/messages`);
    const messagesCifre = await getDocs(collectionRef);
    messagesCifre.forEach(msg => {
      arrMessages.push(msg.data())
    });
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
        {allMessages ?
          allMessages.map(msg => {
            return <Messages messagesFb={msg} />
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
        <button onSubmit={sendMessage}
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