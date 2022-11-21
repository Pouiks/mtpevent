import styled from 'styled-components'
import Image from '../components/Image'
import Reassurance from '../components/Reassurance'
import StudentHome from '../components/StudentHome'
import ProHome from '../components/ProHome'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


const MainTitle = styled.h2`
    font-size: 35px;
`



const TitleContainer = styled.div`
    width:45%;
    height: auto;
    margin: 20px 0 20px 40px;
    text-align: left;
`
const BodyContainer = styled.div`
    width:100%;
    height: auto;
    margin: 100px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;
    align-items: middle;
`

const H3title = styled.h3 `
    width: 25%;
    color: #0693E3;
    font-size: 34px;
    font-weight: bold;
    line-height: 55px;
    text-align: justify;
`
const ParagDescription = styled.p`
    width: 30%;
    margin-top: 35px;
    color: #343434;
    font-size: 20px;
    line-height: 40px;
    text-align: justify;

`

const Spacer = styled.div `
height: 100px;
`





const Home = () => {
    return (
        <>

        <Image src="mtpEventCap.png" alt="Bannière Mtp Event"/>
        <TitleContainer>
            <MainTitle>Votre interlocuteur privilégié pour l'organisation d'événements</MainTitle>
        </TitleContainer>
        <BodyContainer>
            <H3title>Vous êtes un particulier ou un pro, contactez nous et obtenez un devis en quelques heures.</H3title>
            <ParagDescription>
                Soirée étudiante, à thème, afterwork, formation, anniversaire ...
                Profitez de notre carnet d'adresse pour réserver votre salle dans les meilleurs conditions.
                Notre équipe est à l'écoute de vos besoins et fera tout pour vous trouver le meilleur lieux pour votre événement.</ParagDescription>
        </BodyContainer>
        <Reassurance />
        <Spacer />
        <StudentHome />
        <Spacer />
        <ProHome />
        <Container>
            <Typography>Ils nous font confiance</Typography>
        </Container>
        </>

    )
}

export default Home;