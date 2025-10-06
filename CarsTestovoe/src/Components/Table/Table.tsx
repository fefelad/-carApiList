import Btn from "@/shared/Ui/Btn/Btn";
import styles from "./Table.module.css";
import { useCars } from "@/shared/Hook/useCars";
import { useState } from "react";
import type { ICars } from "@/shared/Types/Cars";
import Modal from "@/shared/Ui/Modal/Modal";

function Table() {
  const { cars, deleteCar, updateCar } = useCars();
  const [editingCar, setEditingCar] = useState<ICars | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", price: 0 });

  const ClickDelete = (carId: string) => {
    deleteCar(carId);
  };

  const handleEditClick = (car: ICars) => {
    setEditingCar(car);
    setFormData({ name: car.name, price: car.price });
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (editingCar) {
      updateCar(editingCar.id, formData);
      setIsModalOpen(false);
      setEditingCar(null);
    }
  };

  return (
    <div>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>Id</th>
            <th className={styles.th}>Название</th>
            <th className={styles.th}>Модель</th>
            <th className={styles.th}>Год</th>
            <th className={styles.th}>Цвет</th>
            <th className={styles.th}>Цена</th>
            <th className={styles.th}>Действие</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {cars.map((car) => (
            <tr key={car.id} className={styles.tr}>
              <td className={styles.td_id}>{car.id}</td>
              <td className={styles.td}>{car.name}</td>
              <td className={styles.td}>{car.model}</td>
              <td className={styles.td}>{car.year}</td>
              <td className={styles.td}>
                <span
                  className={styles.span_color}
                  style={{ backgroundColor: car.color.toLowerCase() }}
                ></span>
                {car.color}
              </td>
              <td className={styles.td}>{car.price}$</td>
              <td className={styles.td_btn}>
                <Btn onClick={() => ClickDelete(car.id)} TextBtn="Удалить" />
                <Btn
                  onClick={() => handleEditClick(car)}
                  TextBtn="Редактировать"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal
        TextModal="Редактировать машину"
        onClose={() => setIsModalOpen(false)}
        isOpen={isModalOpen}
      >
        <div>
          <div className={styles.modal_main}>
            <div>
              <label>Изменить Название</label>
              <input
                className={styles.input}
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div>
              <label>Изменить стоимость </label>
              <input
                className={styles.input}
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: Number(e.target.value) })
                }
              />
            </div>
          </div>
          <div className={styles.btn_submit}>
            <Btn onClick={handleSave} TextBtn="Сохранить" />
            <Btn onClick={() => setIsModalOpen(false)} TextBtn="Отмена" />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Table;
