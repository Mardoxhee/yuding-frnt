import styled from 'styled-components'
import { Icon } from '@iconify/react';
import Title from './../shared/Title'
import Card from './../shared/Card'

const Contenair = styled.section`
width: 100%;
background-color:#F6F6F6;
padding: 40px 100px;
display:flex;
flex-direction: column;

@media only screen and (max-width: 799px) {
    padding:40px 10px;
    width: 100%;
    align-items:center;
}
`
const CardContenair = styled.div`
padding:10px 0px;
width: 100%;
height:auto;
display:flex;
justify-content:space-between;
align-items:center;


div{
   
    font-size:1rem;
    display:flex;
  
}

@media only screen and (max-width: 799px) {
    display:flex;
    flex-direction:column;
    height:auto;
}
`

const Popular = ()=>{
    return(
        <Contenair>
            <Title title ="Les plus populaires" subtitle ="Les resturants les plus fréquentés de la ville de la ville de Kinshasa "/>
            <CardContenair>
                <Card category="Sushi" reduction="50" title="Japan sushi" openStatus="fermé" adress="38 Av. de la justice kin GOmbe"  />
                <Card category="Sushi" reduction="50" title="blabla" openStatus="fermé" adress="38 Av. de la justice kin GOmbe"  />
                <Card category="Sushi" reduction="50" title="Japan sushi" openStatus="fermé" adress="38 Av. de la justice kin GOmbe"  />
                <Card category="Sushi" reduction="50" title="blabla" openStatus="fermé" adress="38 Av. de la justice kin GOmbe"  />
           
            </CardContenair>
        </Contenair>
    )
}
export default Popular 