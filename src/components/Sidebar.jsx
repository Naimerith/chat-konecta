import React, { useState, useEffect } from 'react';
import { Avatar } from '@material-ui/core';
import HeaderSidebar from './HeaderSidebar';
import firebaseApp from '../Firebase/credenciales';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import '../styles-sheets/Sidebar.css';

const firestore = getFirestore(firebaseApp);

const Sidebar = () => {

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
            <HeaderSidebar />
            <h3 className='text-more-mentors'>Más Mentores</h3>
            {ListMentors ? ListMentors.map(mentor => {
                return <div className='container-more-mentor'>
                    <div key={mentor.id} className='section-more-mentors'>
                        <p className='text-description'>{mentor.nombre}</p>
                        <p className='text-description'>{mentor.cargo}</p>
                    </div>
                    <Avatar className='avatar-more-mentor'></Avatar>
                </div>
            }) : null}
        </div>
    )
}

export default Sidebar