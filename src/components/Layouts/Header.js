import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import yudingLogo from "./../../../public/Assets/logo/logoyuding.png";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useRouter } from "next/router";

export const HeaderStyled = styled.header`
  .active {
    color: ${({ theme }) => theme.palette.colors.main};
    font-weight: bold;
    transition: all 0.3s ease-in-out;
  }
  transition: all 0.3s ease-in-out;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  z-index: 2;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.25);
  padding: 20px 100px;
  background: ${({ theme }) => theme.palette.colors.white};
  .btn {
    padding: 10px;
    background: none;

    border: solid 2px ${({ theme }) => theme.palette.colors.menuColor};
    outline: none;
  }
  @media only screen and (max-width: 799px) {
    div {
      width: 35%;
    }
    padding: 10px 20px;
  }
`;

const Nav = styled.nav`
  position: relative;
`;
export const Menu = styled.ul`
  display: flex;
  @media only screen and (max-width: 799px) {
    display: block;
    flex-direction: column;
  }
  .menu-icon {
    display: none;
  }
  li {
    @media only screen and (max-width: 799px) {
      width: 100%;
    }
    list-style: none;
    text-decoration: none;
    margin-left: 50px;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.palette.colors.menuColor} !important;
    }
  }

  @media only screen and (max-width: 799px) {
    li {
      display: none;
    }

    .menu-icon {
      display: block;
      font-size: 2.5rem;
    }
    .fontSizeClass {
      font-size: 1.8rem !important;
    }
  }
  .arsy {
    width: auto;
    height: auto;
  }
`;

export const Logo = styled.div`
  width: 150px;
  height: 40px;
`;

const Header = () => {
  const router = useRouter();
  // const [icone, setIcone] = useState(false);
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <HeaderStyled>
      <Link href="/">
        <a>
          <Logo>
            <Image src={yudingLogo} alt="yuding_Logo" />
          </Logo>
        </a>
      </Link>
      <Nav>
        <Menu>
          <li className={router.pathname == "/" ? "active" : ""}>
            <Link href="/">
              <a>Accueil</a>
            </Link>
          </li>
          <li className={router.pathname == "/Explorer" ? "active" : ""}>
            <Link href="/Explorer">
              <a>Explorer</a>
            </Link>
          </li>
          <li className={router.pathname == "/Blog" ? "active" : ""}>
            <Link href="/Blog">
              <a>Blog</a>
            </Link>
          </li>
          <li className={router.pathname == "/About" ? "active" : ""}>
            <Link href="/About">
              <a>A propos</a>
            </Link>
          </li>
          <li>
            <Link href="/Signup">
              <a className="btn">Intégrer la plateforme</a>
            </Link>
          </li>

          <div onClick={handleClick} className="arsy">
            {click ? (
              <Icon icon="maki:cross" className="menu-icon fontSizeClass" />
            ) : (
              <Icon icon="feather:menu" className="menu-icon" />
            )}
          </div>
        </Menu>
      </Nav>
    </HeaderStyled>
  );
};
export default Header;
