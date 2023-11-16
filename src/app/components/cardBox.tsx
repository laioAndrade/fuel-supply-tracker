import { ReactNode } from "react";
import styles from "./components.module.css";

type CardBoxProps = {
  children?: ReactNode;
};

export default function cardBox({ children }: CardBoxProps) {
  return <div className={styles.cardBox}>{children}</div>;
}
