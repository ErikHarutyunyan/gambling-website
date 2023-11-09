import React from "react";
// Styles
import { Container, HeadItem, StatsWrap, Wrapper } from "./CasinoStats.styles";
import Title from "../../../components/Title";
import CalendarDay from "../../../components/CalendarDay/CalendarDay";
import CardInfo from "../../../components/CardInfo/CardInfo";
import PlayerStats from "../../../components/PlayerStats/PlayerStats";
import CasinoStatsTable from "../../../components/CasinoStatsTable/CasinoStatsTable";
import ProviderCasinoStats from "../../../components/ProviderCasinoStats/ProviderCasinoStats";


const CasinoStats = () => {
  return (
    <Wrapper>
      <HeadItem>
        <Title title={"Stats"} />
        <CalendarDay />
      </HeadItem>
      <Container>
        <CardInfo title={"Total casino players"} count={0} />
        <CardInfo title={"Current coins balance"} count={0} />
        <CardInfo title={"Casino GGR"} count={0} />
        <CardInfo title={"Player profit"} count={0} />
      </Container>
      <Container className="total">
        <CardInfo
          title={"Total bet amount"}
          count={0}
          items={[
            {
              name: "Won amount",
              value: 0,
            },
            {
              name: "Lost amount",
              value: 0,
            },
          ]}
        />
        <CardInfo
          title={"Total numbers of bets"}
          count={0}
          items={[
            {
              name: "Won bets",
              value: 0,
            },
            {
              name: "Lost bets",
              value: 0,
            },
          ]}
        />
      </Container>

      <StatsWrap>
        
        <PlayerStats />
        <CasinoStatsTable />
        <ProviderCasinoStats />
      </StatsWrap>
    </Wrapper>
  );
};

export default CasinoStats;
