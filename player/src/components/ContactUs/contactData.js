import { v4 } from "uuid";
import faceImg from "../../assets/images/facebook.png"
import telegramImg from "../../assets/images/telegram.png";
import whatsImg from "../../assets/images/whatsapp.png";
export const contactData = [
  {
    id: v4(),
    name: "Facebook",
    url: "https://www.facebook.com/",
    icon: faceImg,
  },
  {
    id: v4(),
    name: "Telegram",
    url: "https://www.telegram.com/",
    icon: telegramImg,
  },
  {
    id: v4(),
    name: "Whatsapp",
    url: "https://www.whatsapp.com/",
    icon: whatsImg,
  },
];
