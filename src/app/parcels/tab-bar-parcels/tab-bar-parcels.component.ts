import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-tab-bar-parcels',
    templateUrl: './tab-bar-parcels.component.html',
    styleUrls: ['./tab-bar-parcels.component.sass']
})
export class TabBarParcelsComponent implements OnInit {

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
