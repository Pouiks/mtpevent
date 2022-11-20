import styled from 'styled-components'
import Image from '../components/Image'
import { Link } from 'react-router-dom';



const MainTitle = styled.h2`
    font-size: 35px;
`
const ContrainteTitle = styled.h3`
color: #0693E3;
font-size: 34px;
font-weight: bold;
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

`
const ParagDescription = styled.p`
    width: 30%;
    margin-top: 35px;
    color: #343434;
    font-size: 20px;
    line-height: 40px;

`
const BasicContainer = styled.div`
    display:flex;
    width:80%;
    margin: 0 auto;
    gap: 30px;
`

const ItemsContainer= styled.div`
    display: flex;
    min-width: 33%;
    flex-wrap: wrap;
    flex-direction: row;
    color: #343434;
    font-size: 20px;
    
`
const Spacer = styled.div `
height: 100px;
`

const BasicParag = styled.div`
    width: 70%;
    font-size: 30px;
    color: #343434;
    line-height: 55px;
`
const StudentContainer = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: center;
    width: 60%;
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
                Soirée étudiante, à thème, afterwork, anniversaire ...
                Profitez de notre carnet d'adresse pour réserver votre salle dans les meilleurs conditions.
                Notre équipe est à l'écoute de vos besoins et fera tout pour vous trouver le meilleur lieux pour votre événement.</ParagDescription>
        </BodyContainer>
        <BasicContainer>
            <ItemsContainer>
                <img src="search.png" alt="" />
                <p>Parcourez en quelques clics l'ensemble de nos partenaires</p>
            </ItemsContainer>
            <ItemsContainer>
                <img src="bill.png" alt="" />
                <p>Votre devis dans les plus brefs délais, et toutes les modalités !</p>
            </ItemsContainer>
            <ItemsContainer>
                <img src="party.png" alt="" />
                <p>Parcourez en quelques clics l'ensemble de nos partenaires</p>
            </ItemsContainer>
        </BasicContainer>
        <Spacer />
        <StudentContainer>
            <div>
                <ContrainteTitle>Objectif zéro contrainte</ContrainteTitle>
                <BasicParag sx={{fontSize: 30}}>Soirée étudiante ou à thème, de 50 à 1500 personnes, dans des lieux visités, approuvés et éprouvés !
Loué vide ou avec du matériel sonore, débit de boisson, luminaire, décoration, agent de sécurité , DJ,  ... 
C'est votre événement, on vous accompagne !</BasicParag>
            </div>
            <div>
                <img src="students.jpg" width="400px" alt="Evénements étudiant"/>
            </div>
        </StudentContainer>
        <Spacer />
            
        </>

    )
}

export default Home;