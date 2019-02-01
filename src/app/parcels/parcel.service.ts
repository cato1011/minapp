import {Injectable} from '@angular/core';
import {PARCELS_IN, PARCELS_OUT} from './parcels.mock';

@Injectable({
    providedIn: 'root'
})
export class ParcelService {

    constructor() {
    }

    getParcelsIn() {
        return PARCELS_IN;
    }

    getParcelsOut() {
        return PARCELS_OUT;
    }
}
