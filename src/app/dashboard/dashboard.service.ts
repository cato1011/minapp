import { Injectable } from '@angular/core';
import { DashboardItem } from './dashboard.model';
import { TranslateService } from '@ngx-translate/core';
import { UserService } from '../user/user.service'
import { Parcel } from '../parcels/parcel.model'
import { ParcelService } from '../parcels/parcel.service'
import { VehicleService } from '../vehicles/vehicle.service'

@Injectable({
    providedIn: 'root'
})
export class DashboardService {

    public dashboardItems: DashboardItem[];
    public imagePrefix = './assets/icons/dashboard/';
    public parcelInLength: number = 0;
    public parcelOutLength: number = 0;
    public appointmentsLength: number = 0;


    constructor(
        private translate: TranslateService,
        private userService: UserService,
        private parcelService: ParcelService,
        private vehicleService: VehicleService) {

    }

    public getDashboard() {
        this.dashboardItems = [
            {
                title: this.translate.instant('dashboard.appointments'),
                link: 'parcels/appointments',
                image: this.imagePrefix + 'clock_big_2x.png',
                count: this.getCountofAppointments()
            },
            {
                title: this.translate.instant('dashboard.parcels_to_me'),
                link: 'parcels/in',
                image: this.imagePrefix + 'parcels_in_2x.png',
                count: this.getCountofParcelsIn()
            },
            {
                title: this.translate.instant('dashboard.parcels_from_me'),
                link: 'parcels/out',
                image: this.imagePrefix + 'parcels_out_2x.png',
                count: this.getCountofParcelsOut()
            }
        ];


        return this.dashboardItems;
    }

    public getCountofParcelsIn() {
        this.parcelService.reloadIn();
        this.parcelService.getAllIn().subscribe
            ((parcelin: Parcel[]) => {
                if (parcelin != null) {
                    this.parcelInLength = parcelin.length;
                }

            })

        return this.parcelInLength;
    }

    public getCountofParcelsOut() {
        this.parcelService.reloadOut();
        this.parcelService.getAllOut().subscribe
            ((parcelout: Parcel[]) => {
                if (parcelout != null) {
                    this.parcelOutLength = parcelout.length;
                }


            })

        return this.parcelOutLength;

    }

    public getCountofAppointments() {
        this.vehicleService.reloadVehicleRequests();

        this.vehicleService.getAllVehicleRequests().subscribe
            (
                (vehicleRequests) => {

                    if (vehicleRequests != null) {
                        this.appointmentsLength = vehicleRequests.length;
                        
                    }


                }
            )
        return this.appointmentsLength;
    }
}
