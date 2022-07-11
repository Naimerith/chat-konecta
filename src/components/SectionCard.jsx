import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import '../styles-sheets/SectionCard.css';

function SectionCard(props) {


  return (
    <Card
      sx={{ width: 150, heigth: 70, flex: 1, margin: 5, backgroundColor: '#244e73', color: ' white' }}>
      <CardContent className='container-card-content'>
        <div className='card-content'>
          <Typography variant="h5">
            {props.sectionName}
          </Typography>
          <CardActions>
            <Button
              onClick={props.onclick}
              sx={{ color: 'white', backgroundColor: '#ce0f65', color: ' whitesmoke' }}
              size='small'
              text-transform='lowercase'>
              {props.nameButton}
            </Button>
          </CardActions>
        </div>
        <IconButton>
          {props.icon}
        </IconButton>
      </CardContent>
    </Card>
  );
}

export default SectionCard;