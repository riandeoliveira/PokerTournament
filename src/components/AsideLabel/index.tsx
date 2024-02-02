import type { ReactElement } from "react";
import styles from "./styles.module.scss";

interface AsideLabelProps {
  label: string;
  value: string;
}

export const AsideLabel = ({ label, value }: AsideLabelProps): ReactElement => {
  return (
    <div className={styles.aside_label_component}>
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
};
