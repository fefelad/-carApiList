import styles from "./Btn.module.css";

interface IBtn {
  TextBtn: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

function Btn({ TextBtn, onClick, type }: IBtn) {
  return (
    <button className={styles.btn} type={type} onClick={onClick}>
      {TextBtn}
    </button>
  );
}

export default Btn;
