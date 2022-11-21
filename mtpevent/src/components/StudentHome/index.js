import styled from "styled-components";
const StudentContainer = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: center;
    width: 60%;
`
const BasicParag = styled.div`
    width: 70%;
    font-size: 25px;
    color: #343434;
    line-height: 45px;
    text-align: justify;
`

const ContrainteTitle = styled.h3`
color: #0693E3;
font-size: 34px;
font-weight: bold;
`
const StudentHome = () => {
    return(
        <StudentContainer>
            <div>
                <ContrainteTitle>Objectif zéro contrainte</ContrainteTitle>
                <BasicParag sx={{fontSize: 30}}>Soirée étudiante ou à thème, de 50 à 1500 personnes, dans des lieux visités, approuvés et éprouvés !
Loué vide ou avec du matériel sonore, débit de boisson, luminaire, décoration, agent de sécurité , DJ,  ... 
C'est votre événement, on vous accompagne !</BasicParag>
            </div>
            <div>
                <img src="students.jpg" width="350px" alt="Evénements étudiant"/>
            </div>
        </StudentContainer>
    )
};

export default StudentHome;