import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ScreenChat from '../components/ScreenChat';
import '../styles-sheets/Contact.css';

const Contact = () => {
  return (
    <div>
      <Header />
      <div className='container-main-viewContact'>
        <Sidebar />
        <ScreenChat />
      </div>
    </div>
  )
}

export default Contact;