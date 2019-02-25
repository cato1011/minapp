export interface DeliveryPlace {
  description: string;
  id: number;
  latitude: number;
  longitude: number;

}

export const PREFERED_DELIVERY_PLACE: DeliveryPlace = {
    id: 4,
    description: 'BuGa Beach',
    latitude: 49.155783,
    longitude: 9.210792
};

