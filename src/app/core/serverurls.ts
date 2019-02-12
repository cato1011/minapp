import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerUrl {

   parcelServerUrl='http://localhost:8082';
   carrierServerUrl='http://localhost:8081';
   

  constructor() {

  }
}
