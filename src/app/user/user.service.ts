import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User, UserSettings} from './user.model';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private user$ = new BehaviorSubject<User | null>(null);
    private userSettings$ = new Subject<UserSettings | null>();

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

    setUser(user: User) {
        this.user$.next(user);
    }

    getUser(): Observable<User | null> {
        return this.user$.asObservable();
    }

    setSettings(settings) {
        this.userSettings$.next(settings);
    }

    getSettings(): Observable<UserSettings | null> {
        return this.userSettings$.asObservable();
    }
}
