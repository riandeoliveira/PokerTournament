import { observer } from "mobx-react-lite";
import type { ReactElement } from "react";
import { useEffect } from "react";
import type { ITimeStore } from "types";
import styles from "./styles.module.scss";

interface CountdownProps {
  store: ITimeStore;
}

export const Countdown = observer(({ store }: CountdownProps): ReactElement => {
  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (store.minutes === 0 && store.seconds === 0) {
        clearInterval(countdownInterval);

        return;
      }

      if (store.seconds === 0) {
        store.setMinutes(store.minutes - 1);
        store.setSeconds(59);

        return;
      }

      store.setSeconds(store.seconds - 1);
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [store.minutes, store.seconds]);

  const formattedMinutes = store.minutes < 10 ? `0${store.minutes}` : store.minutes;
  const formattedSeconds = store.seconds < 10 ? `0${store.seconds}` : store.seconds;

  return <span className={styles.countdown}>{`${formattedMinutes}:${formattedSeconds}`}</span>;
});
