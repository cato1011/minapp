export interface Vehicles {
  id: number;
  boxGUID: string;
  latitude: number;
  longitude: number;
  parcelGUID: string;
  potentialVehicleIds: number[];
  requestPurpose: string;
  size: string;
  status: string;
  time: string;
  userToken: string;
  waitingTime: number;
}

export interface AlternativeVehicles {
  id: number;
  boxGUID: string;
  alternDeliveryTimeOne: string;
  alternDeliveryTimeThree: string;
  alternDeliveryTimeTwo: string;
  choice: string;
  deliveryRequestID: number;
  status: string;
  ttl: string;
}
