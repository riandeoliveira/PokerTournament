import { AsideLabel } from "components/AsideLabel";
import { intervalToDuration } from "date-fns";
import { observer } from "mobx-react-lite";
import { useEffect, useState, type ReactElement } from "react";
import { tournamentStore } from "stores/tournament.store";
import styles from "./styles.module.scss";

export const AsideArea = observer((): ReactElement => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const date = intervalToDuration({
    start: tournamentStore.startedAt,
    end: tournamentStore.breakTime,
  });

  useEffect(() => {
    if (date.hours && date.minutes && date.seconds) {
      setHours(date.hours);
      setMinutes(date.minutes);
      setSeconds(date.seconds);
    }
  }, [date.hours, date.minutes, date.seconds]);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (hours === 0 && minutes === 0 && seconds === 0) {
        clearInterval(countdownInterval);

        return;
      }

      if (seconds === 0) {
        if (minutes === 0) {
          setHours((prevHours) => prevHours - 1);
          setMinutes(59);
        } else {
          setMinutes((prevMinutes) => prevMinutes - 1);
        }

        setSeconds(59);
      } else {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [hours, minutes, seconds]);

  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  const formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

  return (
    <div className={styles.aside_area_component}>
      <AsideLabel label="Intervalo em" value={formattedTime} />
      <AsideLabel label="ChipCount" value={tournamentStore.totalChips.toLocaleString()} />
      <AsideLabel
        label="Stack Médio"
        value={parseInt(tournamentStore.stackMedium.toFixed()).toLocaleString()}
      />
    </div>
  );
});
