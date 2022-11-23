import styled from 'styled-components';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  height: 100px;
  align-items: center;
  justify-content: space-evenly;
  position: sticky;
`;
const ContainerMinimize = styled(Nav)`
  gap: 30px;
`

const CustomLink = styled(Link)`
    text-decoration:none;
    color: #343434;
    cursor: pointer;
    :hover{
        color:#0693E3;

    }
`

const CustomLinkFB = styled.a`
    text-decoration:none;
    color: #0693E3;
    cursor: pointer;
`
const CustomLinkInsta = styled.a`
    text-decoration:none;
    color: #CD2E91;
    cursor: pointer;

`
const NavBar = () => {
    return(
        <Nav>
            <p>LOGO</p>
            <CustomLink to="/">Accueil</CustomLink>
            <CustomLink to="/partenaires">Partenaires</CustomLink>
            <CustomLink to="/prestations">Prestations</CustomLink>
            <CustomLink>Contact</CustomLink>
            <ContainerMinimize>

               <CustomLinkFB href="https://facebook.com" target="_blank"><FacebookIcon fontSize="large" /></CustomLinkFB> 
                <CustomLinkInsta href="https://instagram.com" target="_blank"><InstagramIcon fontSize="large"/></CustomLinkInsta>
            </ContainerMinimize>
        </Nav>
    )
}

export default NavBar;