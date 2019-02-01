import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  // has to be changed to false in prod mode in order to prevent showing the navbar without login
  private navStateSource = new BehaviorSubject<boolean>(true);

  navState$ = this.navStateSource.asObservable();

  constructor() {}

  setNavBarState( state: boolean ) {
    this.navStateSource.next( state );
  }
}
