import { AsideArea } from "components/AsideArea";
import { LogoArea } from "components/LogoArea";
import { MainArea } from "components/MainArea";
import { PlayerLevelArea } from "components/PlayerLevelArea";
import { TotalPrizeArea } from "components/TotalPrizeArea";
import type { ReactElement } from "react";

export const Home = (): ReactElement => {
  return (
    <>
      <PlayerLevelArea />
      <AsideArea />
      <MainArea />
      <TotalPrizeArea />
      <LogoArea />
    </>
  );
};
