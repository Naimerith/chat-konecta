import React from 'react';
import Sidebar from './Sidebar';
import Header from '../Header/Header';
import ScreenChat from './ScreenChat';
import '../Contact/style-sheets-contact/Contact.css';

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