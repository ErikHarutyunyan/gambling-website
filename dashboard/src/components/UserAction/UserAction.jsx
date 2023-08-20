import React from "react";
// Styles
import { Wrapper, Container, CircleName, InfoName } from "./UserAction.styles";
import { useSelector } from "react-redux";
import { selectUser } from "../../app/features/user/userSlice";

const UserAction = () => {
  const {userInfo} = useSelector(selectUser)

  
  return (
    <Wrapper>
      <Container>
        <CircleName>
          <span>
            {userInfo && userInfo?.user?.full_name
              ? userInfo?.user?.full_name?.charAt(0).toUpperCase()
              : userInfo?.user?.user_name
              ? userInfo?.user?.user_name?.charAt(0).toUpperCase()
              : "N"}
          </span>
        </CircleName>
        <InfoName>
          <p>
            {userInfo && userInfo?.user?.full_name
              ? userInfo?.user?.full_name
              : userInfo?.user?.user_name
              ? userInfo?.user?.user_name
              : "Name Surname"}
          </p>
          <p>
            {userInfo
              ? userInfo?.user?.role?.charAt(0).toUpperCase() +
                userInfo?.user?.role.slice(1)
              : "Admin"}
          </p>
        </InfoName>
      </Container>
    </Wrapper>
  );
};

export default UserAction;
