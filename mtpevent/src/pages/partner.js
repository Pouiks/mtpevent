import { useState, useEffect } from 'react';

import {useLocation} from 'react-router-dom';
import styled from 'styled-components';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Box';
import CarouselComponent from '../components/Carousel'
// import useWindowDimensions from '../services/useWindowDimensions';
const StyledH1 = styled.h1`
    color: #343434;
`
const StyledParag = styled.p`
text-align: justify;
`
const StyledIframe = styled.iframe`
    width: 1200px;
    height:350px;
`
const Partner = () => {    
    const location = useLocation();
    // useWindowDimensions();
    const images = [];
    location.state.images.map(e => images.push({image:e.image}))


    return (
<>

<Container sx={{display:'flex', flexWrap:"wrap", width:{lg:"100%"},pr:0, justifyContent:"space-around", alignItems: 'center', mb:5}}>
<Box sx={{width:{lg:"65%"}}}>
    <CarouselComponent data={images}/>

</Box>
    <Box sx={{ml:5, width:{lg:'30%', lineHeight: 1.1}}}>
    
    <StyledH1>{location.state.name}</StyledH1>
    <StyledParag>{location.state.nbr_salle ?? location.state.salles.length} salles disponibles</StyledParag>
    <StyledParag>Capacité total: {location.state.capacity}</StyledParag>
    <StyledParag>Avantages sur place:</StyledParag>
    {
        location.state.advantages.map(e => <Typography sx={{ml:5}}>- {e}</Typography>)
    }
    <StyledParag>Coordonnées GPS: lat:{location.state.location.x}, long: {location.state.location.y}</StyledParag>
    <StyledParag>Ville: {location.state.city}</StyledParag>
    <StyledParag>Adresse: {location.state.adress}</StyledParag>
    <StyledParag>{location.state.desc}</StyledParag>
    <Button variant="contained">Nous contacter</Button>

</Box>

</Container>
<Container>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus, odio mollis molestie commodo, mi nisl consectetur nulla, et ultrices diam ante eu urna. Ut euismod, diam vel finibus cursus, risus ipsum ornare augue, blandit bibendum augue lectus id erat. Integer nec nulla mattis, mattis lectus quis, cursus enim. Quisque feugiat, lorem sagittis sodales vestibulum, turpis libero tempus turpis, eu ultricies leo dolor eu ipsum. Ut id sollicitudin enim, eu rhoncus libero. Quisque a cursus massa. Ut id lacus pretium, placerat tellus eget, tincidunt massa. Sed congue odio id consequat interdum. Phasellus ut libero ut enim maximus auctor. Vestibulum quis felis ut ipsum facilisis tempus ut quis eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam eu odio risus. Curabitur maximus ut ante at interdum. Aenean metus neque, finibus sit amet ornare non, consequat sed urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.

Praesent iaculis vitae nibh vel consectetur. Nulla rhoncus orci eu dui sollicitudin, id viverra ligula suscipit. Pellentesque ac purus sed massa iaculis vehicula. Praesent vestibulum dolor sed justo luctus ultricies. Nam interdum facilisis rutrum. Aenean ut hendrerit justo. Donec egestas interdum risus, sit amet congue nisi mollis vel.



</Container>
<Container sx={{display: "flex", width:{lg:"inherit"}}}>
        <StyledIframe src={location.state.mapLocation}  allowFullScreen="true" referrerPolicy="no-referrer-when-downgrade"></StyledIframe>
</Container>
</>
    )
}





export default Partner;
