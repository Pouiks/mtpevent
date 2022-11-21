import styled from "styled-components";
const ProContainer = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: center;
    width: 60%;
    gap:100px;
`
const BasicParag = styled.div`
    width: 80%;
    font-size: 30px;
    color: #343434;
    line-height: 55px;
`

const ContrainteTitle = styled.h3`
color: #0693E3;
font-size: 34px;
font-weight: bold;
`
const ProHome = () => {
    return(
        <ProContainer>
            <div>
                <img src="formation.jpg" width="400px" alt="Evénements étudiant"/>
            </div>
            <div>
                <ContrainteTitle>Tous types d'événements</ContrainteTitle>
                <BasicParag >Formation, soirée d'entreprise, cocktails, teambuilding ou encore enterrement de vie de jeune fille/garçon, afterwork, ...</BasicParag> 
                <BasicParag >Gagnez du temps et de l'énergie, on prend en charge la partie administrative.</BasicParag>
            </div>

        </ProContainer>
    )
};

export default ProHome;