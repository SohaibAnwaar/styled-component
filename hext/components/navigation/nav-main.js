import { useState } from "react";
import Link from "next/link";
import { styled } from "styled-components";
const NavMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <HeaderMenu>
      <Nav>
        <MainMenu className="main-menu">
          <li className="has-children">
            <Link href="/hosting">Hosting</Link>
            <ul className="sub-menu">
              <li>
                <Link href="/hosting/web-hosting">Web Hosting</Link>
              </li>
              <li>
                <Link href="/hosting/reseller-hosting">Reseller Hosting</Link>
              </li>
              <li>
                <Link href="/hosting/wordpress-hosting">WordPress Hosting</Link>
              </li>
            </ul>
          </li>
          <li className="has-children">
            <Link href="/vps">VPS</Link>
            <ul className="sub-menu">
              <li>
                <Link href="/vps/kvm-vps">KVM VPS</Link>
              </li>
              <li>
                <Link href="/vps/managed-vps">Managed VPS</Link>
              </li>
              <li>
                <Link href="/vps/storage-vps">Storage VPS</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/dedicated">Dedicated</Link>
          </li>
          <li>
            <Link href="/email">Email</Link>
          </li>
          <li>
            <Link href="/support">Support</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </MainMenu>
        <Link href="#">
          <Button>Login</Button>
        </Link>
      </Nav>
    </HeaderMenu>
  );
};
export default NavMain;

const HeaderMenu = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  min-width: 300px;
  max-width: 300px;
  background-color: var(--color-light-secondary);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  gap: 1rem;
  padding: 0 1rem;
  -webkit-transform: translateX(-100%);
  transform: translateX(-100%);
  -webkit-transition: -webkit-transform 0.3s linear;
  transition: -webkit-transform 0.3s linear;
  transition: transform 0.3s linear;
  transition: transform 0.3s linear, -webkit-transform 0.3s linear;
  z-index: 20;
`;
const Button = styled.a`
  padding: 6px 1rem;
  border-radius: 2rem;
  color: #ffffff;
`;
const MainMenu = styled.ul`
  font-family: var(--font-heading);
  font-weight: 500;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 0;
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
`;
