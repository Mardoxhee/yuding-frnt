import styled from 'styled-components'
import Title from './../shared/Title'
import Card from './../shared/LargeCard' 

const Contenair = styled.section`
padding:40px 100px;
padding-bottom:60px;
width: 100%;
height:auto;
background-color:${({theme})=>theme.palette.colors.offers};

@media only screen and (max-width: 799px) {
    padding:20px 40px;
}
.more{
    float:right;
    margin-top:10px;
    color:${({theme})=>theme.palette.colors.main};
    font-size:0.9rem;
    &:hover{
        cursor:pointer;
    }
}
`
export const CardContenair = styled.div`
width:100%;
height:auto;
display:flex;
justify-content:space-between;
flex-wrap:wrap;


`

const BestOffers = ()=>{
    return(
        <Contenair>
            <Title title="Nos meilleures offres" subtitle="Les restaurants les mieux cotés par la communuaté Yuding "/>
            <CardContenair>
                <Card country="Italienne" restaurantName="O'Poeta" adress="Socimat KInshas Ngaliema" reduction="45" price="20"/>
                <Card country="Italienne" restaurantName="O'Poeta" adress="Socimat KInshas Ngaliema" reduction="45" price="20"/>
                <Card country="Italienne" restaurantName="O'Poeta" adress="Socimat KInshas Ngaliema" reduction="45" price="20"/>
                <Card country="Italienne" restaurantName="O'Poeta" adress="Socimat KInshas Ngaliema" reduction="45" price="20"/>
                <Card country="Italienne" restaurantName="O'Poeta" adress="Socimat KInshas Ngaliema" reduction="45" price="20"/>
                <Card country="Italienne" restaurantName="O'Poeta" adress="Socimat KInshas Ngaliema" reduction="45" price="20"/>
            </CardContenair>
          <span className="more"><a>Voir plus</a></span>
        </Contenair>
    )
}

export default BestOffers