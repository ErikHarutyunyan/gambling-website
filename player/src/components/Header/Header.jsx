import React, { useCallback } from "react";
import useModal from "../../hooks/useModal";
// Styles
import {
  Wrapper,
  LogoWrap,
  Nav,
  Lists,
  List,
  ActionNav,
  Container,
} from "./Header.styles";
import { ImgWrapper } from "../../themes/GlobalStyle";
// Images
import logo from "../../assets/images/logo.png";
import { mainLinks } from "./dataLinks";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  CONTACT_US,
  WITHDRAW,
  DEPOSIT,
  CALL_AGENT,
  NOTIFICATIONS,
} from "../../router/route-path";
import ModalCustom from "../ModalCustom";
import ContactUs from "../ContactUs";
import { Login } from "../../pages";
// import { ResetPassword, ForgotPassword, Register } from "../../pages";
import UserAction from "../UserAction/UserAction";
import { BalanceIcon } from "../Icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setLoginModal } from "../../app/features/user/userSlice";
import { useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();
  const { userInfo, loginModal } = useSelector(selectUser);
  const dispatch = useDispatch()
  const {
    isOpen: isOpenContact,
    openModal: openModalContact,
    closeModal: closeModalContact,
  } = useModal();
  const {
    isOpen: isOpenLogin,
    openModal: openModalLogin,
    closeModal: closeModalLogin,
  } = useModal();

  const handleNavigate = useCallback((path) => {
    navigate(path);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
  if(loginModal) {
    openModalLogin()
    dispatch(setLoginModal(false));
  }
  },[loginModal])
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
            <List onClick={openModalContact} className="contact">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15px"
                viewBox="0 0 24 24"
              >
                <g id="ic-contact-mail">
                  <rect
                    className="cls-1"
                    x={2}
                    y={5}
                    width={20}
                    height={14}
                    rx={2}
                  />
                  <path
                    className="cls-2"
                    d="M2.58,5.59l8.23,8.22a2,2,0,0,0,2.83,0l8-8"
                  />
                </g>
              </svg>
              {/* <p>Contact us</p> */}
            </List>

            {userInfo && (
              <List>
                <NavLink to={NOTIFICATIONS} className={"notification"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                    
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_15_159)">
                      <rect width={24} height={24} fill="none" />
                      <path
                        d="M9.5 19C8.89555 19 7.01237 19 5.61714 19C4.87375 19 4.39116 18.2177 4.72361 17.5528L5.57771 15.8446C5.85542 15.2892 6 14.6774 6 14.0564C6 13.2867 6 12.1434 6 11C6 9 7 5 12 5C17 5 18 9 18 11C18 12.1434 18 13.2867 18 14.0564C18 14.6774 18.1446 15.2892 18.4223 15.8446L19.2764 17.5528C19.6088 18.2177 19.1253 19 18.382 19H14.5M9.5 19C9.5 21 10.5 22 12 22C13.5 22 14.5 21 14.5 19M9.5 19C11.0621 19 14.5 19 14.5 19"
                        stroke="#fff"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 5V3"
                        stroke="#"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  
                  </svg>
                </NavLink>
              </List>
            )}
          </Lists>
        </Nav>
        <ActionNav>
          <Lists>
            {!userInfo && (
              <>
                <List className="defaultList">
                  <p onClick={openModalLogin}>Login</p>
                </List>
                <List className="defaultList">
                  <Link to={CALL_AGENT} target="_blank">
                    Sign Up
                  </Link>
                </List>
              </>
            )}
            {userInfo && (
              <>
                <List className="winDep">
                  <NavLink to={WITHDRAW}>Withdraw</NavLink>
                </List>
                <List className="winDep">
                  <NavLink to={DEPOSIT}>Deposit</NavLink>
                </List>
                <List className="dFlex">
                  <BalanceIcon />
                  Balance: {(userInfo && userInfo.user.balance) || "0"}
                </List>
                <List>
                  <UserAction player={userInfo?.user} />
                </List>
              </>
            )}
          </Lists>
        </ActionNav>
      </Container>

      {isOpenContact && (
        <ModalCustom closeModal={closeModalContact} isOpen={isOpenContact}>
          <ContactUs />
        </ModalCustom>
      )}

      {isOpenLogin && (
        <ModalCustom closeModal={closeModalLogin} isOpen={isOpenLogin}>
          <Login
            closeModalLogin={closeModalLogin}
            // openModalForgot={openModalForgot}
            openModalRegister={() => handleNavigate(CALL_AGENT)}
          />
        </ModalCustom>
      )}
    </Wrapper>
  );
};

export default Header;
