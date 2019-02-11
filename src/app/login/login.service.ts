import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './login.model';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    private user$ = new BehaviorSubject<User | null>(null);

    // the URL of the server through which all HTTP requests to the different backend servers are routed.
    nodejsRouterUrl = 'https://bugalog-nodejs.se.hs-heilbronn.de:8443/';

    // the authorization header needed for all requests
    defaultHeaders = {
        // assigns either the usertoken from the cookies or an empty string, in the latter case preventing the user from accessing the servers
        userToken: ''
    };

    // an extra header needed specifically for requests to the carrier server
    idHeader = {
        identifier: 'APP'
    };

    // the headers needed for carrier server requests
    vehicleRequestHeaders = {...this.defaultHeaders, ...this.idHeader};

    constructor(private httpClient: HttpClient) {
    }

    init() {
        console.log('init logging service');
    }

    getUser(): Observable<User | null> {
        return this.user$.asObservable();
    }

    // authenticate via parcelserver
    login(username: string, password: string): Observable<User> {
        const userResult = this.httpClient.get<User>(this.nodejsRouterUrl + 'users/auth', {
                headers: {
                    'username': '#demo#' + username,  // this will probably be changed eventually but cannot yet
                    'password': password
                }
            }
        );
        userResult.subscribe(user => this.user$.next(user));
        return userResult;
    }

}
