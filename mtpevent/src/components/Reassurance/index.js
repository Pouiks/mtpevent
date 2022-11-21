import styled from 'styled-components'


const MainContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 30px;
`
const ItemsContainer= styled.div`
    display: flex;
    flex-direction:row;
    width:25%;
    align-items: center;
    color: #343434;
    font-size: 20px;
    text-align: justify;
    @media (max-width: 980px) {
        width: 50%;
      }
`

const Reassurance = () => {
    return ( 
        <MainContainer>
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
                <p>Votre contrat de location est prêt, à vous de jouer !</p>
            </ItemsContainer>
        </MainContainer>   
    )
}

export default Reassurance