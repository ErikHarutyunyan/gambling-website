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
  NavAction,
} from "./Header.styles";
import { ImgWrapper } from "../../themes/GlobalStyle";
// Images
import logo from "../../assets/images/logo.png";
// import { mainLinks } from "./dataLinks";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  // CONTACT_US,
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
import { BalanceIcon, BalanceIconM, BurgerMenu } from "../Icons/Icons";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setLoginModal } from "../../app/features/user/userSlice";
import { useEffect } from "react";
import contactImg from "../../assets/images/contact.png";
const Header = () => {
  const navigate = useNavigate();
  const { userInfo, loginModal } = useSelector(selectUser);
  const dispatch = useDispatch();
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
    if (loginModal) {
      openModalLogin();
      dispatch(setLoginModal(false));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginModal]);
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
          <Lists className="menu-help">
            <List onClick={openModalContact} className="contact">
              <img src={contactImg} alt={"contact"} />
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
            {userInfo && (
              <List className="dFlex mobile-dFlex">
                <BalanceIconM />
                Balance: {(userInfo && userInfo.user.balance.toFixed(2)) || "0"}
              </List>
            )}
          </Lists>
        </Nav>
        <ActionNav>
          {!userInfo && (
            <Lists>
              <List className="defaultList">
                <p onClick={openModalLogin}>Login</p>
              </List>
              <List className="defaultList">
                <Link to={CALL_AGENT} target="_blank">
                  Sign Up
                </Link>
              </List>
            </Lists>
          )}

          {userInfo && (
            <NavAction>
              {/* <BurgerMenu className="burger" width={"35px"} height={"auto"} /> */}

              {/* <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                  ></path>
                </svg> */}
              <Lists className="menu-actions">
                <List className="winDep">
                  <NavLink to={WITHDRAW}>Withdraw</NavLink>
                </List>
                <List className="winDep">
                  <NavLink to={DEPOSIT}>Deposit</NavLink>
                </List>
                <List className="dFlex">
                  <BalanceIcon />
                  Balance:{" "}
                  {(userInfo && userInfo.user.balance.toFixed(2)) || "0"}
                </List>
                <List>
                  <UserAction player={userInfo?.user} />
                </List>
              </Lists>
            </NavAction>
          )}
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
