import React, { useState, useEffect } from 'react';
import { Avatar } from '@material-ui/core';
import { Add, Mic, Settings, Headset } from '@material-ui/icons';
import firebaseApp from '../../Firebase/credenciales';
import { getFirestore, collection, doc, setDoc, getDocs } from 'firebase/firestore';
import './style-sheets-contact/Sidebar.css';

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
            <h1 className='text-tittle'>Tranformación Digital</h1>
            <h3 className='text-caption'>Mentor seleccionado</h3>
            <div className='container-mentor-select'>
                <div className='description-mentor-select'>
                    <Avatar></Avatar>
                    <p className='text-description' >Nombre</p>
                    <p className='text-description'>Cargo</p>
                </div>
                <div className='container-section-skills'>
                    <p className='text-description-skill'>Habilidades</p>
                    <section className='section-skills'>
                        <button className='skills'>habilidad1</button>
                        <button className='skills'>habilidad1</button>
                        <button className='skills'>habilidad1</button>
                    </section>
                </div>
            </div>
            <h3 className='text-more-mentors'>Más Mentores</h3>
            {ListMentors ? ListMentors.map(mentor => {
                return <div className='container-more-mentor'>
                    <div className='container-more-mentor'>
                        <section className='section-more-mentors'>
                            <p className='text-description'>{mentor.nombre}</p>
                            <p className='text-description'>{mentor.cargo}</p>
                        </section>
                        <Avatar className='avatar-more-mentor'></Avatar>
                    </div>
                </div>

            }) : null}

        </div>
    )
}

export default Sidebar