import { AsideLabel } from "components/AsideLabel";
import { LogoArea } from "components/LogoArea";
import { MainArea } from "components/MainArea";
import { PlayerLevelArea } from "components/PlayerLevelArea";
import { TotalPrizeArea } from "components/TotalPrizeArea";
import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import styles from "./styles.module.scss";

export const Home = observer((): ReactElement => {
  return (
    <>
      <PlayerLevelArea />
      <aside className={styles.aside}>
        <AsideLabel label="Intervalo em" value="01:05:04" />
        <AsideLabel label="ChipCount" value="1.340.000" />
        <AsideLabel label="Stack Médio" value="47.200" />
      </aside>
      <MainArea />
      <TotalPrizeArea />
      <LogoArea />
    </>
  );
});
