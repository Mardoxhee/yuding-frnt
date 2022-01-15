import styled from 'styled-components'
import SoulignBar from './../shared/SoulignBar'
import CategoryCard from './../shared/CategoryCard'
import Caroussel from "./Caroussel";

const items = [
    <CategoryCard title="pizza" price="30" key="1" />,
    <CategoryCard title="burger" price="30" key="2"  />,
    <CategoryCard title="sushi" price="30" key="3" />,
    <CategoryCard title="pizza" price="30" key="4"  />,
    <CategoryCard title="pizza" price="30" key="5" />,
    <CategoryCard title="pizza" price="30" key="6"  />

];




const Contenair = styled.section`
width:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background-color:${({theme})=>theme.palette.colors.categoryBcg};
padding:40px 100px;
h2{
    color:${({theme})=>theme.palette.colors.title};
    font-size:1.7rem;
    font-weight:400;
    
}

@media only screen and (max-width: 799px) {
padding:40px 50px;
h2{
    text-align:center; 
}

}

`
const CardContenair = styled.div`

width:100%;
height:auto;
margin:3rem;
display:flex;
justify-content:space-between;
`



const Categories = ()=>{
    return(
        <Contenair>
            <SoulignBar/>
            <h2>Catégories des restaurants</h2>
            <CardContenair>
             
                <Caroussel items={items}/>

            </CardContenair>
        </Contenair>

      
    )
}

export default Categories