import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { AccessAlarm, PlayCircleOutline, Paid } from '@mui/icons-material';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Bombilla from '../../images/bombilla.png'
import '../Home/style-sheets-home/CourseCard.css'

function CourseCard(props) {

  return (
    <Card sx={{ width: 150, heigth: 70, flex: 1, margin: 5, backgroundColor: '#244e73', color: ' white' }}>
      <CardContent>
        <button className='top-btn'>Nuevo</button>
        <div className='container-title'>
          <div>
            <Typography variant="h5">
              {props.courseName}
            </Typography>
            <Typography sx={{ mb: 1.5, color: 'white' }} color="text.secondary">
              curso
            </Typography>
          </div>
          <img src={Bombilla} alt="" />
        </div>
        <Typography variant="p" component="div">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vero ducimus tempora saepe necessitatibus dolore veritatis quasi corrupti aspernatur nemo dolorum non iste, aliquid iusto soluta quas, magni qui tenetur.
        </Typography>
        <IconButton className='icon-button'>
          <div className='container-iconAndText'>
            <PlayCircleOutline />
            <p className='text-icon'> 8 lecciones</p>
          </div>
          <div className='container-iconAndText'>
            <AccessAlarm />
            <p className='text-icon'> 1 hora</p>
          </div>
          <div className='container-iconAndText'>
            <Paid />
            <p className='text-icon'>220 kcoins </p>
          </div>
        </IconButton>
        <ListItemButton className='list-taks'>
          <ListItemText> ● Tema 1 </ListItemText>
          <ListItemText> ● Tema 2 </ListItemText>
          <ListItemText> ● Tema 3 </ListItemText>
          <ListItemText> ● Tema 4 </ListItemText>
        </ListItemButton>
      </CardContent>
      <CardActions>
        <Button sx={{ color: 'white', backgroundColor: '#ce0f65', color: ' whitesmoke' }} size='big' text-transform='lowercase'>Ver curso completo</Button>
      </CardActions>
    </Card>
  );
}

export default CourseCard;