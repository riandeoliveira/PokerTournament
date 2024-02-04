import { AsideLabel } from "components/AsideLabel";
import type { ReactElement } from "react";
import styles from "./styles.module.scss";

export const AsideArea = (): ReactElement => {
  return (
    <div className={styles.aside_area_component}>
      <AsideLabel label="Intervalo em" value="01:05:04" />
      <AsideLabel label="ChipCount" value="1.340.000" />
      <AsideLabel label="Stack Médio" value="47.200" />
    </div>
  );
};
