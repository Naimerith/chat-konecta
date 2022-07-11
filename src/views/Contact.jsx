import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import ScreenChat from '../components/ScreenChat';
import '../styles-sheets/Contact.css';
import HeaderSidebar from '../components/HeaderSidebar';

const Contact = () => {
  const [mentorActive, setMentorActive] = useState(null);
  return (
    <div>
      <Header />
      <div className='container-main-viewContact'>
        <div className='sidebar-mentorsList'>
          <HeaderSidebar />
          <Sidebar setMentorActive={setMentorActive} />
        </div>
        <ScreenChat mentorActive={mentorActive} />
      </div>
    </div>
  )
}

export default Contact;