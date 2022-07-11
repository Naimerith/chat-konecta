import React from 'react';
import { Avatar } from '@material-ui/core';
import '../styles-sheets/HeaderSidebar.css';

const HeaderSidebar = () => {
  return (
    <div className='containerMain'>
      <h1 className='text-tittle'>❯ Transformación Digital</h1>
      <h3 className='text-caption'>Mentor seleccionado</h3>
      <div className='container-mentor-select'>
        <div className='description-mentor-select'>
          <Avatar></Avatar>
          <p className='text-description' ></p>
          <p className='text-description'>Cargo</p>
        </div>
        <div className='container-section-skills'>
          <p className='text-description-skill'>Habilidades</p>
          <section className='section-skills'>
            <button className='skills'>Liderazgo</button>
            <button className='skills'>Proactividad</button>
            <button className='skills'>Comunicación</button>
          </section>
        </div>
      </div>
    </div>
  );
}

export default HeaderSidebar;