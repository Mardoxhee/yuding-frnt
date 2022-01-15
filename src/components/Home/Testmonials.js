import styled from 'styled-components';
import Title from './../shared/Title'
import {CardContenair} from './BestOffers'
import TestmoniCard from '../shared/TestmoniCard'

const Contenair = styled.section`
padding:40px 100px;
height:auto;
width:100%;
background-color:${({theme})=>theme.palette.colors.white};
.cardContenair{
    padding:20px 100px;
    @media only screen and (max-width: 799px) {
        padding:10px 40px;
    }
    
}

@media only screen and (max-width: 799px) {

    padding:20px 30px;
}
`


const Testmonials = ()=>{
    return(
        <Contenair>
            <Title title="Ce que disent nos 203 restaurateurs membres" subtitle="Les avis ne peuvent être faits que par les convives qui ont mangé dans ce restaurant en passant par la plateforme Yuding "/>
            <CardContenair className="cardContenair">
                <TestmoniCard author="Arslène" fonction="CTO" content="je suis très fière d'avoir travaillé avec Yuding pour la promotion de mon restau en ligne" />
                <TestmoniCard author="Arslène" fonction="CTO" content="je suis très fière d'avoir travaillé avec Yuding pour la promotion de mon restau en ligne" />
                <TestmoniCard author="Arslène" fonction="CTO" content="je suis très fière d'avoir travaillé avec Yuding pour la promotion de mon restau en ligne" />
            </CardContenair>
        </Contenair>
    )
}

export default Testmonials