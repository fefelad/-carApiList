// LeftSideBar.tsx
import Modal from "@/shared/Ui/Modal/Modal";
import styles from "./LeftSideBar.module.css";
import { useState } from "react";
import Btn from "@/shared/Ui/Btn/Btn";
import CarForm from "@/Components/CarForm/CarForm";
import { useCars } from "@/shared/Hook/useCars";

function LeftSideBar() {
  const {
    sortByPriceDesc,
    sortPriceCar,
    sortByYersOldCar,
    sortByYersYangCar,
    resetCar,
  } = useCars();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFormSubmit = (carData: {
    name: string;
    modal: string;
    year: number;
    color: string;
    price: number;
  }) => {
    console.log("Данные для отправки:", carData);

    setIsModalOpen(false);
  };

  return (
    <div className={styles.wrapper_leftbar}>
      <Btn onClick={() => setIsModalOpen(true)} TextBtn="Добавить машину" />

      <Modal
        TextModal="Добавление машины"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <div>
          <CarForm onSubmit={handleFormSubmit} />
        </div>
      </Modal>
      <div className={styles.btn_sort}>
        <Btn onClick={sortPriceCar} TextBtn="Соритровать по возрастанию цены" />
        <Btn
          onClick={sortByPriceDesc}
          TextBtn="Сориторовать по убыванию цены "
        />
      </div>

      <div className={styles.btn_sort_yers}>
        <Btn
          onClick={sortByYersOldCar}
          TextBtn="Сортировка по возрастанию год"
        />
        <Btn
          onClick={sortByYersYangCar}
          TextBtn="Соритировка по убыванию год"
        />
      </div>
      <div>
        <Btn onClick={resetCar} TextBtn="Сброс" />
      </div>
    </div>
  );
}

export default LeftSideBar;
