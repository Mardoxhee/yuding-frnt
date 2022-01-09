import styled from "styled-components";
import Link from 'next/link'
import Image from "next/image"
import yudingLogo from './../../../public/Assets/logo/logoyuding.png'

export const HeaderStyled = styled.header` 
  position:fixed;
  display:flex;
  justify-content:space-between;
  align-items:center;
  width: 100%;
  height: auto;
  z-index:2;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
  padding: 10px 100px;
  background: ${({theme})=>theme.palette.colors.white};
`;

export const Nav = styled.nav`

`
export const Menu = styled.ul`
li{
  list-style:none;
  text-decoration:none;
  margin-left:50px;
 
  a{
    text-decoration:none;
    color: ${({theme})=>theme.palette.colors.menuColor} !important;
  }
}

display: flex;
`

export const Logo = styled.div`
width:150px;
height:40px;
`


const Header =()=>{
  return(
    <HeaderStyled>
      <Logo>
        <Image src={yudingLogo} alt ="yuding_Logo"/>
      </Logo>
     <Nav>
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
     </Nav>
    </HeaderStyled>
  )
}
export default Header