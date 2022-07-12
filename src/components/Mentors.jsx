import React from 'react';
import '../styles-sheets/Sidebar.css';
import { Avatar } from '@material-ui/core';


const Mentors = (props) => {
  return (
    <div className='container-more-mentor'>
      <div
        onClick={props.onclick}
        className='section-more-mentors'>
        <p className='text-description'>{props.nombreMentor}</p>
        <p className='text-description'>mentor</p>
      </div>
      <Avatar className='avatar-more-mentor'></Avatar>
    </div>
  )
}

export default Mentors