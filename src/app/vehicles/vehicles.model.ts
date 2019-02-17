import {UserService} from '../user/user.service';

export interface Vehicle {
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

export interface AlternativeVehicle {
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

export class VehicleRequest implements Vehicle {

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

    constructor() {
        this.id = 0;
        this.boxGUID = '';
        this.latitude = 0;
        this.longitude = 0;
        this.parcelGUID = '';
        this.potentialVehicleIds = [0];
        this.requestPurpose = '';
        this.size = '';
        this.status = '';
        this.time = '';
        this.userToken = '';
        this.waitingTime = 0;
    }
}
