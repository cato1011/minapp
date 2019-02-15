import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../user/user.model';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../user/user.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private httpClient: HttpClient, private userService: UserService) {
    }

    // authenticate via parcelserver
    login(username: string, password: string): Observable<User> {
        const userResult = this.httpClient.get<User>('https://parcelserver.cabreracano.de/users/auth', {
                headers: {
                    'username': '#demo#' + username,  // this will probably be changed eventually but cannot yet
                    'password': password
                }
            }
        );
        userResult.subscribe(user => this.userService.setUser(user));
        return userResult;
    }

}
