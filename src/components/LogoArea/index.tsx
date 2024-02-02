import logo from "assets/logo.svg";
import type { ReactElement } from "react";
import SVG from "react-inlinesvg";
import styles from "./styles.module.scss";

export const LogoArea = (): ReactElement => {
  return (
    <div className={styles.logo_area_component}>
      <SVG src={logo} />
    </div>
  );
};
