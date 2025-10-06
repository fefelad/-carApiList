import { useEffect } from "react";
import styles from "./RenderCars.module.css";
import { useCars } from "@/shared/Hook/useCars";
import Table from "../Table/Table";

function RenderCars() {
  const { cars, loading, fechDataCars } = useCars();

  useEffect(() => {
    fechDataCars();
  }, [fechDataCars]);

  if (loading) {
    return (
      <div className={styles.wrapper_rendercar}>
        <div className={styles.empty}>Загрузка машин...</div>
      </div>
    );
  }

  if (cars.length === 0) {
    return (
      <div className={styles.wrapper_rendercar}>
        <div className={styles.empty}>Машины не найдены</div>
      </div>
    );
  }
  return (
    <div className={styles.wrapper_rendercar}>
      <Table />
    </div>
  );
}

export default RenderCars;
