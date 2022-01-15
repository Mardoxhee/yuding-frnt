import styled from 'styled-components'
import SearchBar from './../shared/SearchBar'

export const Contenair = styled.section`
width: 100%;
height:100vh;
background: linear-gradient(0deg, rgba(3,7,9,0.5) 100%, rgba(6,10,11,1) 100%, rgba(0,0,0,0.2976540958180147) 100%), url(${({theme})=>theme.img.images.backgroundHome});
background-size:cover;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:${({theme})=>theme.palette.colors.white};
h1{
  font-weight: 600;
font-size: 55px;
line-height: 82px;
}
span{
  font-size: 24px;
line-height: 36px;
text-align: center;
width: 720px;
font-weight: normal;
margin-bottom:50px;
}
@media only screen and (max-width: 799px) {

width:100% !important;  
h1{
  margin-top:20px;
  width:100%;
  font-size: 55px;
  text-align:center;
  line-height:65px;
}
span{
  width:80%;
}
}




` 
const HomeSection = ()=>{
    return (
        <>
        <Contenair>
            <h1>Explorer  et Réserver</h1>
            <span>Les meilleurs restaurants de la ville de Kinshasa aux meilleurs prix</span>
           <SearchBar/>
        </Contenair>
        </>
    )
}

export default HomeSection
