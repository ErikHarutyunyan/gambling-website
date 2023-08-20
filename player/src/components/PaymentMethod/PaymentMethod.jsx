import React from 'react'
// Styles
import { Wrapper, PaymentBlock, PaymentBlocks } from "./PaymentMethod.styles";


import bKashIcon from "../../assets/images/bKash.png"
import NagadIcon from "../../assets/images/Nagad.png";
import btcIcon from "../../assets/images/btc.png"
import usdtIcon from "../../assets/images/usdt.png"
import bnbIcon from "../../assets/images/bnb.png"
import  {LeftArrow} from '../Icons/Icons';

import { useLocation, useNavigate } from 'react-router-dom';
import { MOBILE_PAYMENT } from '../../router/route-path';
import Subheading from '../Subheading';
const PaymentMethod = () => {
  const navigate = useNavigate()
  const {state:title} = useLocation()
  const handleNavigation = (bank) => {
    navigate(MOBILE_PAYMENT,{state: bank});
  };

  return (
    <>
      <Subheading />
      <Wrapper>
        <button onClick={() => navigate(-1)}>
          <LeftArrow />
        </button>
        <h2>CHOOSE {title} METHOD</h2>
        <PaymentBlocks>
          {/* <PaymentBlock
            className="localMobile"
            onClick={() => handleNavigation("bKash")}
          >
            <img src={bKashIcon} alt="bKash" />
            <p>bKash</p>
          </PaymentBlock> */}
          <PaymentBlock
            className="localMobile"
            onClick={() => handleNavigation("Nagad")}
          >
            <img src={NagadIcon} alt="usdt" />
            <p>Nagad</p>
          </PaymentBlock>
        </PaymentBlocks>

        {/* <div>
          <h3>Crypto</h3>
          <PaymentBlocks>
            <PaymentBlock>
              <img src={btcIcon} alt="btc" />
              <p>BTC</p>
            </PaymentBlock>
            <PaymentBlock>
              <img src={usdtIcon} alt="usdt" />
              <p>USDT</p>
            </PaymentBlock>
            <PaymentBlock>
              <img src={bnbIcon} alt="bnb" />
              <p>BNB</p>
            </PaymentBlock>
          </PaymentBlocks>
        </div> */}
      </Wrapper>
    </>
  );
}

export default PaymentMethod