import React, { useState, useEffect } from 'react';
import { Avatar } from '@material-ui/core';
import { Add, Mic, Settings, Headset } from '@material-ui/icons';
import firebaseApp from '../../Firebase/credenciales';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const firestore = getFirestore(firebaseApp);

const Sidebar = () => {
    return (
        <div className='sidebar-mentorsList'>
            <h1>Tranformación Digital</h1>
            <h3>Mentor seleccionado</h3>
            <div>
                <Avatar></Avatar>
                <p>Nombre</p>
                <p>Cargo</p>
                <div>
                    <p>Habilidades</p>
                    <button>habilidad1</button>
                    <button>habilidad1</button>
                    <button>habilidad1</button>
                </div>
            </div>
            <h3>Más Mentores</h3>
            <div>
                <section>
                    <p>Nombre</p>
                    <p>Cargo</p>
                </section>
                <Avatar></Avatar>
            </div>
        </div>
    )
}

export default Sidebar