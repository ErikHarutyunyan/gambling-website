const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  mobileX: "475px",
  tabletL: "600px",
  tablet: "768px",
  laptop: "1024px",
  laptopM: "900px",
  laptopL: "1440px",
  desktop: "2560px"
};

export const device = {
  mobileS: `only screen and (max-width: ${size.mobileS})`,
  mobileM: `only screen and (max-width: ${size.mobileM})`,
  mobileL: `only screen and (max-width: ${size.mobileL})`,
  mobileX: `only screen and (max-width: ${size.mobileX})`,
  tablet: `only screen and (max-width: ${size.tablet})`,
  tabletL: `only screen and (max-width: ${size.tabletL})`,
  laptop: `only screen and (max-width: ${size.laptop})`,
  laptopM: `only screen and (max-width: ${size.laptopM})`,
  laptopL: `only screen and (max-width: ${size.laptopL})`,
  desktop: `only screen and (max-width: ${size.desktop})`,
  desktopL: `only screen and (max-width: ${size.desktop})`
};
