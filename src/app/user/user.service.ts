import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MOCK_USER, User, UserSettings} from './user.model';
import {BehaviorSubject, Observable, ReplaySubject} from 'rxjs';
import {DeliveryPlacesService} from '../delivery-places/delivery-places.service';
import {MessageDialogService} from '../core/message-dialog.service';
import {TranslateService} from '@ngx-translate/core';


@Injectable({
    providedIn: 'root'
})
export class UserService {

    private user$ = new BehaviorSubject<User | null>(null);
    private userSettings$ = new ReplaySubject<UserSettings | null>(1);
    // TODO remove fixed user token value and other user specific values in production
    private userToken = 'c1e46f017983b562c8c6af0627f28ff9';
    private mobileAuthToken = 'ee6488b082bb58cf99609567eb87fd76255979d2e2383eda10dd7b1b8a2ea8bc';
    private userId = 9;
    private email;
    // private parcelServerUrl = 'https://parcelserver.cabreracano.de';
    private parcelServerUrl = 'http://localhost:8082';

    constructor(
        private httpClient: HttpClient,
        private translateService: TranslateService,
        private deliveryPlacesService: DeliveryPlacesService,
        private messageDialogService: MessageDialogService) {
    }

    init() {
        console.log('init user service');
        this.userSettings$.subscribe(settings => {
            this.translateService.use(settings.applicationLangauge);
            this.deliveryPlacesService.loadPreferedDeliveryPlace(settings.preferedDeliveryPlaceId);
        });
        // TODO check if there is an existing user, then set this user, if not redirect to login page
        this.setUser(MOCK_USER);
    }

    saveSettings(userSettings: UserSettings) {

        this.httpClient.put<User>(this.parcelServerUrl + '/users/' + this.userId + '/configuration', userSettings, {
            headers: {userToken: this.userToken, 'Content-Type': 'application/json'}
        }).subscribe(
            (user: User) => {
                console.log(user);
                this.userSettings$.next(user.userConfiguration);
                this.translateService.use(user.userConfiguration.applicationLangauge);


                this.messageDialogService.presentToast(this.translateService.instant('success.message.settings'));
            },
            error => {

                this.messageDialogService.presentToast(this.translateService.instant('failure.message.settings'));
            }
        );
    };

    loadUser() {
        // TODO reload logged in user
    }

    saveUser() {
        // TODO send post request
    }

    setUser(user: User) {
        this.userToken = user.userToken;
        this.mobileAuthToken = user.mobileAuthToken;
        this.userId = user.id;
        this.email = user.email;
        this.userSettings$.next(user.userConfiguration);
        this.user$.next(user);
    }

    getUser(): Observable<User | null> {
        return this.user$.asObservable();
    }

    getSettings(): Observable<UserSettings | null> {
        return this.userSettings$;
    }

    getUserToken() {
        return this.userToken;
    }

    getMobileAuthToken() {

        return this.mobileAuthToken;
    }

    getEmail() {

        return this.email;
    }
}
