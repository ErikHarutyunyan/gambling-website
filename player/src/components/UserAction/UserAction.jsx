import React from "react";
// Images
import userIcon from "../../assets/images/user.png";
// Styles
import { Wrapper, NavWrap, UserHead } from "./UserAction.styles";
import useHideShow from "../../hooks/useHideShow";
import { playerLinks } from "./dataLinks";
import { Link } from "react-router-dom";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { userLogout } from "../../app/features/user/userActions";

const UserAction = ({player={}}) => {
  const [headerRef, childrenRef, otherRef, setShowLinks] = useHideShow();
  const dispatch = useDispatch()
  const handleShow = useCallback((title)=> {
  
    if(title === 'Log out') {
      dispatch(userLogout());
    }
    setShowLinks((show) => !show)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <Wrapper>
      <UserHead onClick={() => setShowLinks((show) => !show)} ref={otherRef}>
        <img src={userIcon} alt="" />
        <span>Hey, {player?.user_name || ""}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={12}
          height={6}
          viewBox="0 0 12 6"
          fill="none"
        >
          <path
            d="M11.7772 0.197918C11.6289 0.0659566 11.4531 3.05176e-05 11.2499 3.05176e-05H0.750056C0.546802 3.05176e-05 0.371088 0.0659566 0.222628 0.197918C0.0741683 0.330026 0 0.486212 0 0.66677C0 0.847291 0.0741683 1.00348 0.222628 1.13548L5.47257 5.802C5.6212 5.93396 5.79691 6.00003 6 6.00003C6.20309 6.00003 6.37897 5.93396 6.52731 5.802L11.7772 1.13544C11.9255 1.00348 12 0.847291 12 0.666734C12 0.486212 11.9255 0.330026 11.7772 0.197918Z"
            fill="white"
          />
        </svg>
      </UserHead>
      <NavWrap ref={headerRef}>
        <ul ref={childrenRef}>
          {playerLinks.map((item) => {
            return (
              <li key={item.id} onClick={() => handleShow(item.name)}>
                <Link to={item.url}>
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </NavWrap>
    </Wrapper>
  );
};

export default UserAction;
