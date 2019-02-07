import {Injectable} from '@angular/core';
import {DashboardItem} from './dashboard.model';
import {TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  public dashboardItems: DashboardItem[];
  public foo:string;

  constructor(private translate:TranslateService) {
   
  }

  public getDashboard() {
    
    this.dashboardItems = [
      {
        title: this.translate.instant('dashboard.appointments'),
        link: 'events',
        image: 'aktuelle_termine.png'
      },
      {
        title: this.translate.instant('dashboard.parcels_to_me'),
        link: 'parcels/in',
        image: 'sendungen_zu_mir.png'
      },
      {
        title: this.translate.instant('dashboard.parcels_from_me'),
        link: 'parcels/out',
        image: 'sendungen_von_mir.png'
      },
      {
        title: this.translate.instant('dashboard.N2N'),
        link: 'courier',
        image: 'quartierkurier.png'
      },
      {
        title: this.translate.instant('dashboard.supplier'),
        link: 'supplier',
        image: 'zulieferer.png'
      },
      {
        title: this.translate.instant('dashboard.request_vehicle'),
        link: 'vehicles',
        image: 'fahrzeug.png'
      }
    ];
    return this.dashboardItems;
  }
}
