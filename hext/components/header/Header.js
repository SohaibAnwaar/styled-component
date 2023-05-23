import Image from "next/image";
import Link from "next/link";
import NavMain from "../navigation/nav-main";
import styled from "styled-components";
const Header = () => {
  return (
    <HeaderTop>
      <Container>
        <HeaderContainer>
          <Link href="/">
            <a>
              <Image
                src="/images/logo.png"
                width={118}
                height={50}
                alt="logo"
              />

              {/* site-logo */}
            </a>
          </Link>
          <NavMain />
        </HeaderContainer>
        {/* header-container */}
      </Container>
    </HeaderTop>
  );
};
export default Header;

const HeaderTop = styled.div`
  padding: 1rem 0;
`;
const Container = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0 10px;
  width: 100%;
  max-width: 1220px;
`;
const HeaderContainer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

