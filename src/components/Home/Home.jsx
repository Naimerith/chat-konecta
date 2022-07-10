import React from 'react'
import CourseCard from './CourseCard';
import SectionCard from './SectionCard';
import { TextSnippet, Newspaper, PersonPin } from '@mui/icons-material';
import '../Home/style-sheets-home/Home.css';
import Header from '../Header/Header';


const Home = (userGlobal) => {
  console.log(userGlobal.displayName);
  return (
    <div>
      <Header />
      <h1>Cursos</h1>
      <div className='container-cardCourse'>
        <CourseCard
          courseName='Tranformación Digital'
        />
        <CourseCard
          courseName='Marketing Digital'
        />
        <CourseCard
          courseName='Big Data'
        />
      </div>
      <div className='container-sectionCard'>
        <SectionCard
          sectionName='Mis notas'
          nameButton='Ir'
          icon={<TextSnippet></TextSnippet>}
        />
        <SectionCard
          sectionName='Noticias'
          nameButton='Ir'
          icon={<Newspaper></Newspaper>}
        />
        <SectionCard
          sectionName='Contactar con un mentor'
          nameButton='Enviar mensaje'
          icon={<PersonPin></PersonPin>}
        />
      </div>
    </div>

  )
}

export default Home;