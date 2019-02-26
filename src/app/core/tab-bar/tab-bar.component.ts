import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-tab-bar',
    templateUrl: './tab-bar.component.html',
    styleUrls: ['./tab-bar.component.sass']
})
export class TabBarComponent implements OnInit {

    activeRoute: String;

    constructor(private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.activeRoute = params['context'];
        });
    }

    click(location) {
        this.router.navigate(['./parcels/' + location]);
    }

}
