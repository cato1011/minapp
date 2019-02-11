import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerUrl {

   parcelServerUrl='http://locahost:8082';
   carrierServerUrl='http://locahost:8081';;

  constructor() {

  }
}
