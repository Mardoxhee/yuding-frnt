import styled from 'styled-components';
import Link from 'next/link';
import { Icon } from '@iconify/react';

const Menu = styled.ul`
display:flex;
flex-direction: column;

li{
list-style-type: none;
margin:10px 0px;

a{
    text-decoration: none;
    color:#CECECE;
}
}
`

const Contenair = styled.footer`
padding:40px 100px;
width:100%;
height:50vh;
background-color:${({theme})=>theme.palette.colors.black};
.upSide{

    display:flex;
    justify-content:space-between;
  
  div{
    width:20%;
    display:flex;
    flex-direction:column;
    color:${({theme})=>theme.palette.colors.white};
 
    h3{
        font-weight:500;
        font-size:1rem;
    }
  }
  .newLetterContenair{
      
      display:flex;
      flex-direction:column;
      justify-content:space-between;
      .socialMedias{
          width:100%;
            h4{
                font-weight:400;
                font-size:0.8rem;
                width:100%;
            }
        .iconeContenair{
            width:60%;
            display:flex !important;
            justify-content:space-between;
            font-size:1.5rem;
            margin-top:20px;
            
            }
        }
      
  }
  .newsLetter{
        display:flex ;
        height:30px;
        width:200px;
        input{
            width:80%;
            border:none;
            background-color:#F3F3F3;
            outline:none;
            padding:10px;
        }
        button{
            width:20%;
            border:none;
            display:flex;
            justify-content:center;
            align-items:center;
            color:white;
            background-color:${({theme})=>theme.palette.colors.main};
            &:hover{
                cursor:pointer;
            }
        }
    
    }
}

.buttomSide{
    width:100%;
    display:flex;
    margin-top:30px;
    padding-top:10px;
    border-top:1px solid #C4C4C4;
    justify-content:space-between;
.languages{
    display:flex;
    justify-content:space-between;
    width:25%;
    .languageSwitch, .deviseSwitch{
        padding:8px 15px;
        color:${({theme})=>theme.palette.colors.white};
        font-weight:400;
        background: rgba(99, 99, 99, 0.3);
        border-radius: 5px;
        display:flex;
        align-items:center;
        width:45%;
        justify-content:space-between;
        font-size:0.9rem;
        .ic{
            font-size:1.2rem;
        }
    }


}
.terms{
    display: flex;
    width: 25%;
    justify-content:space-between;
    p{
        display: flex;
        justify-content:center;
        align-items:center;
        padding:5px;
        height:20px;
        color:${({theme})=>theme.palette.colors.white};
        font-weight:200;
    }
    .middle{
        border-left:solid 1px #C4C4C4;
        border-right:solid 1px #C4C4C4;
    }
}
}

`

const Footer =()=>{
    return(
     <Contenair>
         <div className="upSide">
            <div>
                <h3>LIENS RAPIDES</h3>
                <Menu>
                    <li>
                        <Link href="/">
                            <a>Accueil</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Explorer">
                            <a>Explorer</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Blog">
                            <a>Blog</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/A propos">
                            <a>A propos</a>
                        </Link>
                    </li>
                </Menu>
            </div>
            <div>
            <h3>CATEGORIES</h3>
                <Menu>
                    <li>
                            <Link href="/A propos">
                                <a>Principales catégories</a>
                            </Link>
                    </li> 
                    <li>
                            <Link href="/A propos">
                                <a>Les mieux notés</a>
                            </Link>
                    </li>
                    <li>
                            <Link href="/A propos">
                                <a>Meilleurs prix</a>
                            </Link>
                    </li>
                    <li>
                            <Link href="/A propos">
                                <a>Les plus réservés </a>
                            </Link>
                    </li>          
                </Menu>
            </div>
            <div>
            <h3>CONTACTS</h3>
                <Menu>
                    <li>
                        <Link href="tel +243 828261084">
                            <a>+243 828261084 </a>
                        </Link> 
                    </li>
                    <li>
                        <Link href="yuding.platform@gmail.com">
                            <a>yuding.platform@gmail.com</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="tel +243 828261084">
                            <a>+243 828261084 </a>
                        </Link> 
                    </li>
                    <li>
                        <Link href="yuding.platform@gmail.com">
                            <a>yuding.platform@gmail.com</a>
                        </Link>
                    </li>  
                </Menu>
            </div>
            <div className="newLetterContenair">
                <h3>ON RESTE EN CONTACT</h3>
                    <form className="newsLetter">
                        <input/>
                        <button><Icon icon="akar-icons:chevron-right"  className="icone"/></button>
                    </form>
                    <div className="socialMedias">
                        <h4>Suivez-nous sur les réseaux</h4>
                        <small className="iconeContenair">
                            
                                <Icon icon="brandico:facebook-rect"/>
                                <Icon icon="ant-design:twitter-square-filled"/>
                                <Icon icon="ant-design:instagram-filled"/>                        
                                <Icon icon="logos:youtube-icon"/>
                        </small>

                    </div>
            </div>
         </div>
         <div className="buttomSide">
            <div className="languages">
                <div className="languageSwitch">
                    <p>French</p>
                    <Icon icon="bytesize:chevron-bottom" />
                    <Icon icon="clarity:world-line" className="ic"/>
                </div>
                <div className="deviseSwitch">
                <p>US Dollar</p>
                <Icon icon="bytesize:chevron-bottom" />
                </div>
            </div>

            <div className="terms">
               <p>Termes et conditions</p>
               <p className="middle">RGPD</p>
               <p>©Yuding</p>
            </div>
         </div>
     </Contenair>
    )
}
 export default Footer