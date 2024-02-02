import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import styles from "./styles.module.scss";

export const Home = observer((): ReactElement => {
  return <div className={styles.page}>Hello, World!</div>;
});
