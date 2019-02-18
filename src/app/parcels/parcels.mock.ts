import {Parcel, ParcelStatus} from './parcel.model';

export const PARCELS_OUT: Parcel[] = [
    {
        id: 19,
        userId: 6,
        status: ParcelStatus.STATION,
        boxGUID: 'string',
        parcelGUID: 'string',
        inTimestamp: 'string',
        inFromLogisticProcessGUID: 'string',
        inFromLogisticGUID: 'string',
        inFromUserGUID: '8511988b-ff87-446c-9fab-db245ee6b451@USERS.PKADEMO1',
        inToLogisticProcessGUID: 'string',
        inToUserGUID: '0c82ab6b-0a28-4cc2-b0b1-e808220e6d0c@USERS.PKADEMO1',
        inToUserTokenGUID: '0c82ab6b-0a28-4cc2-b0b1-e808220e6d0c@USERS.PKADEMO1',
        vehicleRequestId: 0,
        vehicleAlternativeRequestId: 0,
        sender: 'Marium',
        deliveryplace: 'string',
        date: 'string',
        outDate: '2019-01-30T22:14:34.614+0000'
    },
    {
        id: 21,
        userId: 6,
        status: ParcelStatus.DELIVERED,
        boxGUID: 'string',
        parcelGUID: 'string',
        inTimestamp: 'string',
        inFromLogisticProcessGUID: 'string',
        inFromLogisticGUID: 'string',
        inFromUserGUID: '8511988b-ff87-446c-9fab-db245ee6b451@USERS.PKADEMO1',
        inToLogisticProcessGUID: 'string',
        inToUserGUID: '0c82ab6b-0a28-4cc2-b0b1-e808220e6d0c@USERS.PKADEMO1',
        inToUserTokenGUID: '0c82ab6b-0a28-4cc2-b0b1-e808220e6d0c@USERS.PKADEMO1',
        vehicleRequestId: 0,
        vehicleAlternativeRequestId: 0,
        sender: 'Marium',
        deliveryplace: 'string',
        date: 'string',
        outDate: '2019-01-30T22:14:34.614+0000'
    },
    {
        id: 22,
        userId: 6,
        status: ParcelStatus.PIN,
        boxGUID: 'string',
        parcelGUID: 'string',
        inTimestamp: 'string',
        inFromLogisticProcessGUID: 'string',
        inFromLogisticGUID: 'string',
        inFromUserGUID: '8511988b-ff87-446c-9fab-db245ee6b451@USERS.PKADEMO1',
        inToLogisticProcessGUID: 'string',
        inToUserGUID: '0c82ab6b-0a28-4cc2-b0b1-e808220e6d0c@USERS.PKADEMO1',
        inToUserTokenGUID: '0c82ab6b-0a28-4cc2-b0b1-e808220e6d0c@USERS.PKADEMO1',
        vehicleRequestId: 0,
        vehicleAlternativeRequestId: 0,
        sender: 'DHl',
        deliveryplace: 'string',
        date: 'string',
        outDate: '2019-01-30T22:14:34.614+0000'
    }
];

export const PARCELS_IN: Parcel[] = [
    {
        id: 18,
        userId: 9,
        status: ParcelStatus.STATION,
        boxGUID: 'string',
        parcelGUID: 'string',
        inTimestamp: 'string',
        inFromLogisticProcessGUID: 'string',
        inFromLogisticGUID: 'string',
        inFromUserGUID: '0c82ab6b-0a28-4cc2-b0b1-e808220e6d0c@USERS.PKADEMO1',
        inToLogisticProcessGUID: 'string',
        inToUserGUID: '8511988b-ff87-446c-9fab-db245ee6b451@USERS.PKADEMO1',
        inToUserTokenGUID: '8511988b-ff87-446c-9fab-db245ee6b451@USERS.PKADEMO1',
        vehicleRequestId: 0,
        vehicleAlternativeRequestId: 0,
        sender: 'Marium',
        deliveryplace: 'string',
        date: 'string',
        outDate: '2019-01-30T22:14:34.614+0000'
    },
    {
        id: 20,
        userId: 9,
        status: ParcelStatus.STATION,
        boxGUID: 'string',
        parcelGUID: 'string',
        inTimestamp: 'string',
        inFromLogisticProcessGUID: 'string',
        inFromLogisticGUID: 'string',
        inFromUserGUID: '0c82ab6b-0a28-4cc2-b0b1-e808220e6d0c@USERS.PKADEMO1',
        inToLogisticProcessGUID: 'string',
        inToUserGUID: '8511988b-ff87-446c-9fab-db245ee6b451@USERS.PKADEMO1',
        inToUserTokenGUID: '8511988b-ff87-446c-9fab-db245ee6b451@USERS.PKADEMO1',
        vehicleRequestId: 0,
        vehicleAlternativeRequestId: 0,
        sender: 'Marium',
        deliveryplace: 'string',
        date: 'string',
        outDate: '2019-01-30T22:14:34.614+0000'
    }];
