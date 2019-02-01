import {Injectable} from '@angular/core';
import {DashboardItem} from './dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  public dashboardItems: DashboardItem[];

  constructor() {
  }

  public getDashboard() {
    this.dashboardItems = [
      {
        title: 'Aktuelle Termine',
        link: 'events',
        image: 'aktuelle_termine.png'
      },
      {
        title: 'Sendungen zu mir',
        link: 'parcels/in',
        image: 'sendungen_zu_mir.png'
      },
      {
        title: 'Sendungen von mir',
        link: 'parcels/out',
        image: 'sendungen_von_mir.png'
      },
      {
        title: 'Quartierkurier',
        link: 'courier',
        image: 'quartierkurier.png'
      },
      {
        title: 'Zulieferer',
        link: 'supplier',
        image: 'zulieferer.png'
      },
      {
        title: 'Fahrzeug anfordern',
        link: 'vehicles',
        image: 'fahrzeug.png'
      }
    ];
    return this.dashboardItems;
  }
}
