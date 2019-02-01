import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../login.service';
import {AppService} from '../../app.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

    public form: FormGroup;
    public username: string;
    public title = 'Herzlich Willkommen';

    constructor(private loginService: LoginService, private appService: AppService, private router: Router) {
    }

    onSubmit() {
        const link = ['dashboard'];
        // console.log('submit' + this.form.value.username + ':' + this.form.value.password);
        this.loginService.login(this.form.value.username, this.form.value.password)
            .subscribe(
                () => {
                    this.router.navigate(link);
                    this.appService.setNavBarState(true);
                },
                error => console.log('error during login ' + error)
            );
    }

    ngOnInit() {
        this.form = new FormGroup({
            username: new FormControl(this.username, Validators.required),
            password: new FormControl('', Validators.required)
        });
        this.appService.setNavBarState(false);
    }

}
