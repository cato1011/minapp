export interface Parcel {
  boxGUID: string;
  date: string;
  deliveryplace: string;
  id: number;
  inFromLogisticGUID: string;
  inFromLogisticProcessGUID: string;
  inFromUserGUID: string;
  inTimestamp: string;
  inToLogisticProcessGUID: string;
  inToUserGUID: string;
  inToUserTokenGUID: string;
  outDate: string;
  parcelGUID: string;
  sender: string;
  status: ParcelStatus;
  userId: number;
  vehicleAlternativeRequestId: number;
  vehicleRequestId: number;
}

export enum ParcelStatus {
    STATION = 'STATION',
    PIN = 'PIN',
    DELIVERY_REQUESTED = 'DELIVERY_REQUESTED',
    DELIVERY_CONFIRMED = 'DELIVERY_CONFIRMED',
    DELIVERED = 'DELIVERED',
    CANCELED = 'CANCELED',
    REJECTED = 'REJECTED'
}
