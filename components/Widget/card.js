import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin:"10px 10px 20px 10px"
  },
});

export default function ImgMediaCard({img,title,p}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
       
          height="140"
          image={img}
     
        />
        <CardContent>
          <h2 style={{color:"black",fontSize:30}}>
            {title}
          </h2>
          <p>
          {p}
          </p>
        </CardContent>
      </CardActionArea>
      
    </Card>
  );
}