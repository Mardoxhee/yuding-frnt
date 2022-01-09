import styled from 'styled-components'
import { Icon } from '@iconify/react';
import CategoryNumber from './CategoryNumber'

const Contenair = styled.div`
display: flex;
flex-direction:column;
justify-content: center;
text-align: center;
align-items: center;
padding:20px ;
width: 231px;
height: 250px;
color:${({theme})=>theme.palette.colors.black};
background-color:${({theme})=>theme.palette.colors.white};
border-radius:3px;
&:hover{
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.12);
    cursor:pointer;
    .IcnoneContenair{
        color:${({theme})=>theme.palette.colors.black}
    }
}
.NbrContenair{
    width:100%;
    position:relative;
    div{
        position:absolute;
        right:0;
    }
}
.IcnoneContenair{
    width:100%;
    position:relative;
    height:70%;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size:70px;
    color:${({theme})=>theme.palette.colors.main}
}

`

const CategoryCard = ({title, price})=>{
    return(
        <Contenair>
            <div className="NbrContenair"> 
                <CategoryNumber value={69}/>
            </div>
            <div  className="IcnoneContenair"> 
                <Icon icon="fluent:food-pizza-24-regular"  className="icone"/>
            </div>
            <div>
                <h3>{title}</h3>
                <span>prix-moyen : {price}£ </span>
            </div>
           
        </Contenair>
    )
}

export default CategoryCard