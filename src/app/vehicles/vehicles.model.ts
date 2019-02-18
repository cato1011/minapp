export interface Vehicle {
    id: number;
    boxGUID: string;
    latitude: number;
    longitude: number;
    parcelGUID: string;
    potentialVehicleIds: number[];
    requestPurpose: string;
    size: string;
    status: VehicleStatus;
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
    choice: TimeChoice;
    deliveryRequestID: number;
    status: string;
    ttl: string;
}

export enum TimeChoice {
    NO_CHOICE,
    FIRST_TIME,
    SECOND_TIME,
    THIRD_TIME
}

export enum VehicleStatus {
    PENDING = 'PENDING',
    CONFIRMED = 'CONFIRMED',
    REJECTED = 'REJECTED',
    EXPIRED = 'EXPIRED'
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
    status: VehicleStatus;
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
        this.size = 'new_request';
        this.status = VehicleStatus.PENDING;
        this.time = '';
        this.userToken = '';
        this.waitingTime = 0;
    }
}
