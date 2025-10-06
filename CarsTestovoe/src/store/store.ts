import type { ICars, CreateCarDto } from "@/shared/Types/Cars";
import axios from "axios";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ICarsState {
  cars: ICars[];
  loading: boolean;
  error: string | null;

  fechDataCars: () => Promise<void>;
  createCar: (carData: CreateCarDto) => void;
  updateCar: (id: string, updates: { name: string; price: number }) => void;
  deleteCar: (id: string) => void;
  clearLocalData: () => void;

  // Сортировка
  sortPriceCar: () => void;
  sortByPriceDesc: () => void;
  sortByYersOldCar: () => void;
  sortByYersYangCar: () => void;

  resetCar: () => void;
}

export const useCarsStore = create<ICarsState>()(
  persist(
    (set, get) => ({
      cars: [],
      loading: false,
      error: null,

      fechDataCars: async () => {
        set({ loading: true, error: null });
        try {
          const response = await axios(
            "https://ofc-test-01.tspb.su/test-task/vehicles"
          );
          const data = response.data;
          const carsData: ICars[] = data.map((item: ICars, index: number) => ({
            id: (index + 1).toString(),
            name: item.name,
            model: item.model,
            year: item.year,
            color: item.color,
            price: item.price,
            latitude: item.latitude,
            longitude: item.longitude,
          }));
          set({
            cars: carsData,
            loading: false,
          });
        } catch (err) {
          const errorMessage = axios.isAxiosError(err)
            ? err.message
            : "Неизвестная ошибка";
          set({ error: errorMessage, loading: false });
        }
      },

      createCar: (carData: CreateCarDto) => {
        const state = get();
        // Новый ID = текущее количество + 1
        const newId = (state.cars.length + 1).toString();
        const newCar: ICars = {
          ...carData,
          id: newId,
        };
        set((state) => ({
          cars: [...state.cars, newCar],
        }));
      },

      updateCar: (id: string, updates: { name: string; price: number }) => {
        set((state) => ({
          cars: state.cars.map((car) =>
            car.id === id ? { ...car, ...updates } : car
          ),
        }));
      },

      deleteCar: (id: string) => {
        set((state) => {
          // Удаляем машину и обовляем оставшиеся
          const updatedCars = state.cars
            .filter((car) => car.id !== id)
            .map((car, index) => ({
              ...car,
              id: (index + 1).toString(),
            }));

          return {
            cars: updatedCars,
          };
        });
      },

      sortPriceCar: () => {
        set((state) => ({
          cars: [...state.cars].sort((a, b) => a.price - b.price),
        }));
      },

      sortByPriceDesc: () => {
        set((state) => ({
          cars: [...state.cars].sort((a, b) => b.price - a.price),
        }));
      },

      sortByYersOldCar: () => {
        set((state) => ({
          cars: [...state.cars].sort((a, b) => a.year - b.year),
        }));
      },

      sortByYersYangCar: () => {
        set((state) => ({
          cars: [...state.cars].sort((a, b) => b.year - a.year),
        }));
      },

      resetCar: () => {
        set((state) => ({
          cars: [...state.cars].map((car, index) => ({
            ...car,
            id: (index + 1).toString(),
          })),
        }));
      },

      clearLocalData: () => {
        set({
          cars: [],
        });
      },
    }),
    {
      name: "cars-storage",
    }
  )
);
