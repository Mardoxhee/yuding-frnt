import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  
 


 

*{
    box-sizing:border-box;
    margin:0;
    padding:0;
    font-family:"poppins", sans-serif;
    .alice-carousel{
    
    padding-right:-5px;
    margin-left:10px;

    }
 

    
}
 img {
     max-width:100%;
 }
 .box{
  @media only screen and (max-width: 799px) {
  width:100%;
 
  
  }
  
}
.modal{
  padding:1rem;
}


`;
export default GlobalStyles;
