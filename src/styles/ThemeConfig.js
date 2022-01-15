import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    colors: {
     main: "#F7941D",
     secondary:"#FFF3E4",
     red:"#FF3B3B",
     black:"#121921",
     text:"#7A7A7A",
     title:"#222222",
     green:"#008E1F",
     menuColor:'#434343',
     white:'#FFFFFF',
     categoryNumber:"#F0F0F0",
     categoryNumberFontColor:"#787878",
     categoryBcg : "#FAFAFA",
     offers:'#FCFCFC',
     cardBorder:"#B7B7B7",
     mobilebcg:"#F9F9F9"

    } ,
    
  },

  img:{
    images:{
      backgroundHome:"/Assets/bg.jpg",
      cardBackground:"/Assets/japan.jpg",
      banner:"/Assets/smiley.jpg",
      largeCard:"/Assets/rotana.jpg",
      banner2:"/Assets/banner2.jpg"
    }
  }
});
export default theme;
