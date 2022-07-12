import React, { useState, useEffect } from 'react';
import { firebaseApp } from '../Firebase/credenciales';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import Mentors from './Mentors';
import '../styles-sheets/Sidebar.css';

const firestore = getFirestore(firebaseApp);

const Sidebar = ({ setMentorActive }) => {

  /* Guardo el array de mentores en el estado */
  const [ListMentors, setListMentors] = useState([]);

  async function getMentors() {
    const arrayMentors = [];
    const collectionRef = collection(firestore, 'mentors');
    const mentorsCifre = await getDocs(collectionRef);
    mentorsCifre.forEach(mentorCifre => {
      arrayMentors.push(mentorCifre.data());
    });
    //console.log(arrayMentors);
    setListMentors(arrayMentors)
  };

  /* Obtener los mentores al ingresar*/
  useEffect(() => {
    getMentors();
  }, []);

  return (
    <div className='sidebar-mentorsList'>
      <h3 className='text-more-mentors'>Más Mentores</h3>
      {ListMentors ? ListMentors.map((mentor, index) => {
        return (
          <Mentors
            key={index}
            onclick={() => setMentorActive(mentor.nombre)}
            nombreMentor={mentor.nombre}
          />
        )
      }) : null}
    </div>
  );
}

export default Sidebar;