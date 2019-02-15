import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MenuService} from '../menu.service';
import {AuthService} from '../auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login-view.component.html',
    styleUrls: ['./login-view.component.sass']
})
export class LoginViewComponent implements OnInit {

    public form: FormGroup;
    public username: string;
    public title = 'Herzlich Willkommen';

    constructor(private authService: AuthService, private menuService: MenuService, private router: Router, private route: ActivatedRoute) {
    }

    onSubmit() {
        // console.log('submit' + this.form.value.username + ':' + this.form.value.password);
        this.authService.login(this.form.value.username, this.form.value.password)
            .subscribe(
                (user) => {
                    console.log(user);
                    this.router.navigate(['dashboard']);
                    this.menuService.setNavBarState(true);
                },
                error => console.log('error during login ' + error)
            );
    }

    ngOnInit() {
        this.form = new FormGroup({
            username: new FormControl(this.username, Validators.required),
            password: new FormControl('', Validators.required)
        });
    }

}
