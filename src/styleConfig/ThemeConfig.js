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
     categoryBcg : "#FAFAFA"

    } ,
    
  },

  img:{
    images:{
      backgroundHome:"/Assets/bg.jpg"
    }
  }
});
export default theme;
