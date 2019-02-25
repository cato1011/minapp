import {Parcel} from '../parcels/parcel.model';

export interface Vehicle {
    id: number;
    boxGUIDList: string[];
    latitude: number;
    longitude: number;
    parcelGUIDList: string[];
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
    boxGUIDList: string[];
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
    EXPIRED = 'EXPIRED',
    CANCELED_BY_USER = 'CANCELED_BY_USER'
}

export class VehicleRequest implements Vehicle {
    id: number;
    boxGUIDList: string[];
    latitude: number;
    longitude: number;
    parcelGUIDList: string[];
    potentialVehicleIds: number[];
    requestPurpose: string;
    size: string;
    status: VehicleStatus;
    time: string;
    userToken: string;
    waitingTime: number;

    constructor() {
        this.id = 0;
        this.boxGUIDList = [];
        this.latitude = 0;
        this.longitude = 0;
        this.parcelGUIDList = [];
        this.potentialVehicleIds = [0];
        this.requestPurpose = '';
        this.size = 'new_request';
        this.status = VehicleStatus.PENDING;
        this.time = '';
        this.userToken = '';
        this.waitingTime = 0;
    }
}

export interface VehicleWithParcels {
    id: number;
    parcels: Parcel[];
}