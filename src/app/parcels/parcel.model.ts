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
  status: string;
  userId: number;
  vehicleAlternativeRequestId: number;
  vehicleRequestId: number;
}
