import styled from 'styled-components';
import { Link, NavLink} from 'react-router-dom';
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
const NavBar = () => {
    return(
        <Nav>
            <p>LOGO</p>
            <CustomLink to="/">Accueil</CustomLink>
            <CustomLink to="/partenaires">Nos partenaires</CustomLink>
            <CustomLink>Contact</CustomLink>
            <ContainerMinimize>
                <CustomLink>facebook</CustomLink>
                <CustomLink>Insta</CustomLink>
            </ContainerMinimize>
        </Nav>
    )
}

export default NavBar;