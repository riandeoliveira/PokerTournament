import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import styles from "./styles.module.scss";

export const Home = observer((): ReactElement => {
  return (
    <div className={styles.page}>
      <button type="button">Clique em mim</button>
    </div>
  );
});
