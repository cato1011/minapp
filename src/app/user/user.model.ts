import {DeliveryPlace} from '../delivery-places/delivery-places.model';

export interface User {
  appartmentNumber: string;
  city: string;
  country: string;
  customerId: string;
  email: string;
  favouriteDeliveryPlaceID: string;
  firebaseDevices: [{
    authToken: {
      stringValue: string
    };
    deviceName: string;
    fcmToken: {
      stringValue: string
    }
  }];
  floor: string;
  foreignKey: string;
  guid: string;
  handicap: number;
  id: number;
  language: string;
  lastLogin: string;
  logisticProcessList: [{
      guid: string;
      logisticList: [{
          guid: string;
          name: string;
          tokenList: [{
              active: number;
              generatedId: number;
              guid: string;
              logisticProcessGUID: string;
              name: string;
              type: number;
              validFrom: string;
              validTo: string;
              value: string
            }]
        }];
      name: string;
      type: number;
    }];
  mobileAuthToken: string;
  name: string;
  phoneMobileNumber: string;
  phoneNumber: string;
  preName: string;
  street: string;
  streetNumber: string;
  title: string;
  tokenList: [{
      active: number;
      generatedId: number;
      guid: string;
      logisticProcessGUID: string;
      name: string;
      type: number;
      validFrom: string;
      validTo: string;
      value: string
    }];
  userGUID: string;
  userToken: string;
  zipCode: string;
}

export interface UserSettings {
  language: string;
  deliveryPlace: DeliveryPlace;
}
