import styled from 'styled-components'
import Image from 'next/image'

const Contenair = styled.div`
margin:10px 0px;
width: 400px;
height:130px;
box-sizing: border-box;
border : solid 1px ${({theme})=>theme.palette.colors.cardBorder};
display:flex;
border-radius:0px 10px 10px 0px ;
@media only screen and (max-width: 799px) {
    height:100px;
    width: 300px; 
    padding:0; 
    .imgContenair{
        width: 190px;
        
    }
    .textSide{

        .country, .adress{
            font-size:0.7rem;
        }
        h3{
            font-size:0.5rem;
           
        }
    div{
        display:flex;
        width:100%;
        justify-content:space-between;
        margin-top:4px;
        max-width:50%;
        align-items:center;
        P{
            font-size:0.8rem;
        }
        .reduction{
           font-size:0.6rem;
           padding:2px 2px;
           background-color:${({theme})=>theme.palette.colors.red};
           color: ${({theme})=>theme.palette.colors.white};
       }
    }
}

}
.imgContenair{
    width:234px;
    height:100%;
    background-image: url(${({theme})=>theme.img.images.largeCard});
    background-size: cover;
    
}
.textSide{
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    padding:10px;
    span{
        font-style:italic;
        font-size:1rem;   
    }
    h3{
        font-size:0.9rem;
        font-weight:bold;
    }
    div{
        display:flex;
        width:100%;
        justify-content:space-between;
        margin-top:4px;
        max-width:90%;
        align-items:center;
        .reduction{
           
            padding:3px 10px;
            background-color:${({theme})=>theme.palette.colors.red};
            color: ${({theme})=>theme.palette.colors.white};
        }
    }
}

`
const LargeCard = ({country, restaurantName, adress, reduction, price})=>{
    return(
        <Contenair>
            
                <div className="imgContenair">

                </div>
                <div className="textSide">
                    <span className="country" >{country}</span>
                    <h3>{restaurantName}</h3>
                    <span className="adress"  >{adress}</span>
                    <div>
                        <p className="reduction">-{reduction}</p>
                        <p>Prix moyen {price}$</p>
                    </div>
                </div>
        
           

        </Contenair>
    )
}

export default LargeCard