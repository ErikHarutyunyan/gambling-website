import React from "react";
// Styles
import {
  Wrapper,
  LogoWrap,
  Nav,
  Lists,
  List,
  Container,
} from "./Header.styles";
import { ImgWrapper } from "../../themes/GlobalStyle";
// Images
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import CashCoinBalance from "../CashCoinBalance/CashCoinBalance";
import UserAction from "../UserAction/UserAction";
import { useSelector } from "react-redux";
import { selectUser } from "../../app/features/user/userSlice";

const Header = () => {
  const {userInfo} = useSelector(selectUser)
  return (
    <Wrapper>
      <Container className="main-container">
        <LogoWrap>
          <Link to="/">
            <ImgWrapper
              src={logo}
              alt="logo"
              width={"100px"}
              height={"auto"}
              objectFit={"contain"}
              loading={"lazy"}
            />
          </Link>
        </LogoWrap>
        <Nav>
          <Lists>
            <List className="balance">
              <CashCoinBalance cash={userInfo?.user?.balance}/>
            </List>
            <List>
              <UserAction />
            </List>
          </Lists>
          {/* <Lists className="lang">
            <List>
              <span className="active">EN</span>
            </List>
            <List>
              <span>বাংলা</span>
            </List>
          </Lists> */}
        </Nav>
      </Container>
    </Wrapper>
  );
};

export default Header;
