import React, { useEffect } from "react";
// Styles
import {
  HeadWrap,
  ViewItem,
  ViewKey,
  ViewValue,
  ViewWrap,
  WalletWrap,
  Wrapper,
} from "./ViewPerson.styles";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import arrowBackImg from "../../assets/images/arrowBack.png";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../app/features/user/userActions";
import { selectUser } from "../../app/features/user/userSlice";
import Spinner from "../../components/Spinner/Spinner";
import TokenService from "../../services/token.service";
import { useState } from "react";
import { formatDateMDY } from "../../utils/utils";
const ViewPerson = () => {
  const { id } = useParams();
  const { userDetails, loading } = useSelector(selectUser);
  
  const [data,setData] = useState(null)
  
  // const { state: info } = useLocation();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (!id) {
    navigate(-1);
  }
  useEffect(() => {
    dispatch(getUserDetails(id));
    return () => setData(null)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    
    if(userDetails) {
      if(userDetails?.user?.user_role!=='player') {
        const {
          balance,
          email,
          full_name,
          user_name,
          attached_users,
          phone_number,
          date_time,
        } = userDetails;
        setData({
          balance,
          email,
          full_name,
          user_name,
          children: attached_users?.length,
          phone_number,
          created: formatDateMDY(date_time),
        });
      }
    }
  }, [userDetails]);
  if (loading) {
    return <Spinner />;
  }
  
  return (
    <Wrapper>
      {data !== null ? (
        <>
          <HeadWrap>
            <img src={arrowBackImg} alt="arrow" onClick={() => navigate(-1)} />
            <h2>
              <span>{userDetails?.user?.user_role.split("_").join(" ")} </span>
              {data?.user_name}
            </h2>
          </HeadWrap>
          <ViewWrap>
            {Object.keys(data).map((key) => {
              
              let firstName = key
                .split("_")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");
              return (
                <ViewItem>
                  <ViewKey>{firstName}</ViewKey>
                  {key === "balance" ? (
                    <WalletWrap>
                      <p>
                        <span>Balance</span>
                        <span>{data[`${key}`]}</span>
                      </p>
                      
                    </WalletWrap>
                  ) : (
                    <ViewValue>{data[`${key}`]}</ViewValue>
                  )}
                </ViewItem>
              );
            })}
          </ViewWrap>
        </>
      ) : null}
    </Wrapper>
  );
};

export default ViewPerson;
