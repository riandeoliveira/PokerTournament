import type { ReactElement } from "react";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export const Countdown = (): ReactElement => {
  const [minutes, setMinutes] = useState(15);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (minutes === 0 && seconds === 0) {
        clearInterval(countdownInterval);

        return;
      }

      if (seconds === 0) {
        setMinutes((prevMinutes) => prevMinutes - 1);
        setSeconds(59);

        return;
      }

      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [minutes, seconds]);

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return <span className={styles.countdown}>{`${formattedMinutes}:${formattedSeconds}`}</span>;
};
