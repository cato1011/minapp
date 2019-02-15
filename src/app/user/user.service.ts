import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User, UserSettings} from './user.model';
import {BehaviorSubject, Observable, ReplaySubject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private user$ = new BehaviorSubject<User | null>(null);
    // TODO remove fixed user token value in production
    private userToken = 'c1e46f017983b562c8c6af0627f28ff9';
    private mobileAuthToken = '';
    private userSettings$ = new ReplaySubject<UserSettings | null>(1);

    constructor(private httpClient: HttpClient) {
    }

    init() {
        console.log('init user service');
    }

    loadSettings() {
        // TODO load settings from user and set the settings: ask michael
    }

    loadUser() {
        // TODO reload logged in user
    }

    saveUser() {
        // TODO send post request
    }

    saveSettings() {
        // TODO send post request
    }

    setUser(user: User) {
        this.userToken = user.userToken;
        this.mobileAuthToken = user.mobileAuthToken;
        this.user$.next(user);
    }

    getUser(): Observable<User | null> {
        return this.user$.asObservable();
    }

    setSettings(settings) {
        console.log(settings);
        this.userSettings$.next(settings);
    }

    getSettings(): Observable<UserSettings | null> {
        return this.userSettings$.asObservable();
    }

    getUserToken() {
        return this.userToken;
    }

    getMobileAuthToken() {
        return this.mobileAuthToken;
    }
}
