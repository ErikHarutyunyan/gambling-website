import React from "react";
// Styles
import { Wrapper, Lists, List } from "./Sidebar.styles";
import { footerLinks, sidebarLinks } from "./sidebarLinks";
import { NavLink, useNavigate } from "react-router-dom";
import { ArrowIcon } from "../Icons/Icons";
import useHideShow from "../../hooks/useHideShow";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../app/features/user/userActions";
import { useCallback } from "react";
import { useEffect } from "react";
import { selectUser } from "../../app/features/user/userSlice";
import { HOME } from "../../router/route-path";
import TokenService from "../../services/token.service";

const ListChildren = ({ link }) => {
  const {headerRef, childrenRef, setShowLinks, showLinks} = useHideShow();

  return (
    <div onClick={() => setShowLinks((show) => !show)}>
      <p>
        {link.icon}
        <span>{link.name}</span>
        <ArrowIcon className={showLinks ? "active" : ""} />
      </p>
      <div ref={headerRef} className="childrenWrap">
        <Lists ref={childrenRef}>
          {link.children.map((child) => (
            <List key={child.id} className="childItem">
              <NavLink to={child.url}>
                <span>{child.name}</span>
              </NavLink>
            </List>
          ))}
        </Lists>
      </div>
    </div>
  );
};

const Sidebar = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector(selectUser);
  const navigate = useNavigate();
  const handleLogout = useCallback(() => {
    dispatch(userLogout());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (userInfo === null) {
      navigate(HOME, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);
  return (
    <Wrapper>
      <nav>
        <Lists>
          {sidebarLinks.map((link) => {
            const role = TokenService.getRole();
            if (link?.checked?.length && !link.checked.includes(role)) {
             
              return (
                <List key={link.id}>
                  <NavLink to={link.url}>
                    {link.icon}
                    <span>{link.name}</span>
                  </NavLink>
                </List>
              );
            } else if (!link.checked) {
             
              return (
                <List key={link.id}>
                  {link.children ? (
                    <ListChildren link={link} />
                  ) : (
                    <NavLink to={link.url}>
                      {link.icon}
                      <span>{link.name}</span>
                    </NavLink>
                  )}
                </List>
              );
            } else {
              
              return null;
            }
          })}
        </Lists>
        <Lists className="footerLinks">
          {footerLinks.map((link) => {
            if (link.url === "/logout") {
              return (
                <List key={link.id}>
                  <NavLink
                    to={link.url}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLogout();
                    }}
                  >
                    {link.icon}
                    <span>{link.name}</span>
                  </NavLink>
                </List>
              );
            }
            return (
              <List key={link.id}>
                <NavLink to={link.url}>
                  {link.icon}
                  <span>{link.name}</span>
                </NavLink>
              </List>
            );
          })}
        </Lists>
      </nav>
    </Wrapper>
  );
};

export default Sidebar;
