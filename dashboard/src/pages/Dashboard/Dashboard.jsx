import React from "react";
// Styles
import { HeadItem, Container, Wrapper } from "./Dashboard.styles";
import CardInfo from "../../components/CardInfo/CardInfo";
import { balanceData, depositsData, gdrData, ngrData, playerSportData, playersData, withdrawsData } from "./dataDashboard";
import CalendarDay from "../../components/CalendarDay/CalendarDay";
import Title from "../../components/Title";



const Dashboard = () => {
  return (
    <Wrapper>
      <HeadItem>
        <Title title={'Dashboard'} />
        <CalendarDay />
      </HeadItem>
      <Container>
        <CardInfo
          title={balanceData.title}
          count={balanceData.count}
          items={balanceData.info}
        />
        <CardInfo
          title={gdrData.title}
          count={gdrData.count}
          items={gdrData.info}
        />
        <CardInfo
          title={ngrData.title}
          count={ngrData.count}
          items={ngrData.info}
        />
        <CardInfo
          title={playerSportData.title}
          count={playerSportData.count}
          items={playerSportData.info}
        />
        <CardInfo
          title={playersData.title}
          count={playersData.count}
          items={playersData.info}
        />
        <CardInfo
          title={depositsData.title}
          count={depositsData.count}
          items={depositsData.info}
        />
        <CardInfo
          title={withdrawsData.title}
          count={withdrawsData.count}
          items={withdrawsData.info}
        />
      </Container>
    </Wrapper>
  );
};

export default Dashboard;
