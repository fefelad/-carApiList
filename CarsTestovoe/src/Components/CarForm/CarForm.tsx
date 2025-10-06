import styles from "./CarForm.module.css";
import { useState } from "react";
import Input from "@/shared/Ui/Input/Input";
import Btn from "@/shared/Ui/Btn/Btn";
import type { CarFormData, CarFormProps } from "@/shared/Types/Cars";
import { useCars } from "@/shared/Hook/useCars";

function CarForm({ onSuccess }: CarFormProps) {
  const { createCar } = useCars();

  const [formData, setFormData] = useState<CarFormData>({
    name: "",
    model: "",
    year: "",
    color: "",
    price: "",
    latitude: "",
    longitude: "",
  });

  const handleChange =
    (field: keyof CarFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const carData = {
      name: formData.name,
      model: formData.model,
      year: Number(formData.year),
      color: formData.color,
      price: Number(formData.price),
      latitude: Number(formData.latitude),
      longitude: Number(formData.longitude),
    };

    createCar(carData);

    setFormData({
      name: "",
      model: "",
      year: "",
      color: "",
      price: "",
      latitude: "",
      longitude: "",
    });
  };

  if (onSuccess) onSuccess();

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.wrapper_input}>
        <label>Название автомобиля </label>
        <Input
          placeholder="name"
          value={formData.name}
          OnChange={handleChange("name")}
        />
      </div>
      <div className={styles.wrapper_input}>
        <label> Название модели</label>
        <Input
          placeholder="model"
          value={formData.model}
          OnChange={handleChange("model")}
        />
      </div>
      <div className={styles.wrapper_input}>
        <label>Год машины</label>
        <Input
          placeholder="year"
          value={formData.year}
          OnChange={handleChange("year")}
          type="number"
        />
      </div>
      <div className={styles.wrapper_input}>
        <label>Цвет машины</label>
        <Input
          placeholder="color"
          value={formData.color}
          OnChange={handleChange("color")}
        />
      </div>
      <div className={styles.wrapper_input}>
        <label>Цена машины</label>
        <Input
          placeholder="price"
          value={formData.price}
          OnChange={handleChange("price")}
          type="number"
        />
      </div>

      <Btn type="submit" TextBtn="Добавить" />
    </form>
  );
}

export default CarForm;
