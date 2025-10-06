export interface ICars {
  id: string;
  name: string;
  model: string;
  year: number;
  color: string;
  price: number;
  latitude: number;
  longitude: number;
}

export interface CreateCarDto {
  name: string;
  model: string;
  year: number;
  color: string;
  price: number;
  latitude: number;
  longitude: number;
}

export interface CarFormData {
  name: string;
  model: string;
  year: string;
  color: string;
  price: string;
  latitude: string;
  longitude: string;
}

export interface CarFormProps {
  onSubmit: (data: {
    name: string;
    modal: string;
    year: number;
    color: string;
    price: number;
  }) => void;
  onCancel?: () => void;
  onSuccess?: () => void;
}
