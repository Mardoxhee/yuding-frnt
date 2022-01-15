import styled from 'styled-components';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import phone from './../../../public/Assets/phone.png'

const Contenair = styled.section`
width: 100%;
padding:60px 300px;
height:auto;
background-color:${({theme})=>theme.palette.colors.mobilebcg};
display:flex;
justify-content:space-between;
.text{
    width:500px;
    color:${({theme})=>theme.palette.colors.text}
}
.imgContenair{
 
    height:500px;
    width:300px;
    box-sizing:border-box;

   
}
.textSide{
    display: flex;
    flex-direction: column;
    justify-content:center;
    h2{
        font-size:2rem;
        width:500px;
        color:${({theme})=>theme.palette.colors.title};
    }

    .stores{
        display: flex;
        width:500px;    
        justify-content: space-between;
        margin:25px 0px;
        div{
            display: flex;
            width: 40%;
            justify-content:space-between;
            border: 1px solid ${({theme})=>theme.palette.colors.text};
            padding:15px 20px;
            border-radius:20px;
            align-items:center;
            p{
                font-size:1.2rem;
                font-weight:500;
            }
            .icone{
                font-size:2.2rem;
            }

        }
    }
}

@media only screen and (max-width: 799px) {
    flex-direction:column;
    padding:0;
    width:100%;
    .imgContenair{
        display:none;
    height:200px;
    width:150px;
    box-sizing:border-box;
    }
    .textSide{
        padding:20px 30px;
        .text{
            width:250px;
            font-size:1rem;
        }
        .stores{
            display: flex;
           
            width:300px;  
            justify-content: space-between;
            margin:25px 0px;
        div{
            display: flex;
            
            justify-content:space-between;
            border: 1px solid ${({theme})=>theme.palette.colors.text};
          
            border-radius:15px;
            align-items:center;
            font-size:0.5rem;
            .icone{
                font-size:2rem;
            }
            P{
                font-size:0.8rem;
            }
        }
    }
    h2{
        font-size:1.5rem;
        width:250px;
}

    }
 
   
}
`
const MobileApp = ()=>{
    return(
        <Contenair>
            <div className="textSide">
                <h2>
                Téléchargez notre application mobile pour une meilleure expérience !
                </h2>
                <div className="stores">
                    <div>
                        <Icon icon="ion:logo-google-playstore" className="icone"   />
                        <p>Google Play</p>
                    </div>
                    <div>
                        <Icon icon="cib:app-store" className="icone" />
                        <p>App Store</p>
                    </div>
                </div>
                <p className="text">Profitez pleinnement de nos services avec l’application Yuding disponible sur android et IOS </p>
            </div>
            <div className="imgContenair">
                <Image src={phone} alt="Yuding_Phone_App" className="imgContent"/>
            </div>
        </Contenair>
    )
}

export default MobileApp