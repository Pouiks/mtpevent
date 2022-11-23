import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Typography from '@mui/material/Typography';

const StyledContainer = styled.div`
display:flex;
width: 100%;
height:150px;
margin-top:50px;
flex-wrap: wrap;
background-color: #343434;
justify-content: space-between;
align-items:center;
`
const StyledFooterDiv = styled.div`
    padding: 0 20px;
`

function Footer() {
  return (
    <StyledContainer>
        <StyledFooterDiv>
            <Typography>Politique de confidentialité</Typography>
            <Typography>Conditions générales</Typography>
        </StyledFooterDiv>
        <StyledFooterDiv>
        <FacebookIcon fontSize="large"/>
        <InstagramIcon fontSize="large"/>
        
        </StyledFooterDiv>
        <StyledFooterDiv>
        <Typography>MTP Event</Typography>
        <Typography>Montpellier et Alentours</Typography>
        </StyledFooterDiv>
    </StyledContainer>
  )
}

export default Footer