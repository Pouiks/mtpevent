import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';



const PartnersCard= (props) => {
const navigate = useNavigate()

const navigateToCard = () => {
  navigate(`/partenaires/${props.id}`, {state: props})
}
  return (
    <Card sx={{ maxWidth: 305 , mt:5, cursor:"pointer"}} onClick={() => navigateToCard()}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        title={props.name}
        subheader={props.city}
      />

      <CardMedia
        component="img"
        height="194"
        image={props.images[0].image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="title3" color="text.secondary">
          {props.desc}
        </Typography>
      </CardContent>
      {/* PROBABLY USE TO GET FUTURE FAVORITE */}
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

      </CardActions> */}
    </Card>
  )
}
export default PartnersCard;