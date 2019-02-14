import {Component, OnInit} from '@angular/core';
import {VehicleService} from '../vehicle.service';
import { ToastController } from '@ionic/angular';


@Component({
    selector: 'app-vehicle-requested-view',
    templateUrl: './vehicle-requested-view.component.html',
    styleUrls: ['./vehicle-requested-view.component.sass']
})
export class VehicleRequestedViewComponent implements OnInit {

    private imageUrl = '../assets/icons/parcels/vehicle_requested.png';
    private dateTime=this.vehicleService.getLastVehicleRequest().time.slice(0, -1);
    private toastMessage="";
    

    constructor(private vehicleService: VehicleService, public toastController: ToastController) {
    }
    async presentToast() {
        const toast = await this.toastController.create({
          message: 'Thank you! The delivery date is now requested. We will notify you when the appointment is confirmed..',        
          position:'middle',
          cssClass:'vehicleToast'              
        });
        toast.present();
      }
    ngOnInit() {
        console.log(this.vehicleService.getLastVehicleRequest());
        this.presentToast();

    }

}
