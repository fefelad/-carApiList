import { useCarsStore } from "@/store/store";

export const useCars = () => {
  const {
    cars,
    loading,
    error,
    fechDataCars,
    createCar,
    updateCar,
    deleteCar,
    clearLocalData,
    sortByPriceDesc,
    sortPriceCar,
    sortByYersOldCar,
    sortByYersYangCar,
    resetCar,
  } = useCarsStore();

  return {
    // состояние
    cars,
    loading,
    error,

    //Дествия
    fechDataCars,
    createCar,
    updateCar,
    deleteCar,
    clearLocalData,
    sortByPriceDesc,
    sortPriceCar,
    sortByYersOldCar,
    sortByYersYangCar,
    resetCar,
  };
};
