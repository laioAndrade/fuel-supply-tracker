"use client";
import styles from "./components.module.css";

type ButtonProps = {
  title: string;
  onClick?: () => void;
};

export default function Button({ title, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={styles.primaryButton}>
      {title}
    </button>
  );
}
