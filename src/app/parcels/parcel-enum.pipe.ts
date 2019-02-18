import {Pipe, PipeTransform} from '@angular/core';
import {ParcelStatus} from './parcel.model';

@Pipe({
    name: 'parcelEnum'
})
export class ParcelEnumPipe implements PipeTransform {
    status = new Map<string, string>([
        [ParcelStatus.STATION, 'parcel.status.station'],
        [ParcelStatus.PIN, 'parcel.status.pin'],
        [ParcelStatus.DELIVERY_REQUESTED, 'parcel.status.delivery_requested'],
        [ParcelStatus.DELIVERY_CONFIRMED, 'parcel.status.delivery_confirmed'],
        [ParcelStatus.DELIVERED, 'parcel.status.delivered'],
        [ParcelStatus.CANCELED, 'parcel.status.canceled'],
        [ParcelStatus.REJECTED, 'parcel.status.rejected']
    ]);

    transform(parcelStatus: string, args?: any): String {
        return this.status.get(parcelStatus);
    }

}
