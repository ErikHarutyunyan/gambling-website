import React from 'react'
// Styles
import {Item, Items, Wrapper} from "./ContactUs.styles"
import { contactData } from './contactData';
import QRCode from "qrcode.react";

const ContactUs = () => {
  return (
    <Wrapper>
      <h2>ContactUs</h2>
      <Items>
        {contactData.map(item => {
          return (
            <Item key={item.id}>
              <QRCode
                value={item.url}
                size={110}
                bgColor={"#ffffff"}
                fgColor={"#000000"}
              />
              <div>
                <img src={item.icon} alt={item.name} />
                <p>{item.name}</p>
              </div>
            </Item>
          );
        })}
      </Items>
    </Wrapper>
  );
}

export default ContactUs