import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from './_services/token-storage.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    isCollapsed = false;
    isLoggedIn = false;
    username?: string;
    URLParts: Array<string> = [];

    constructor(private tokenStorageService: TokenStorageService) {
        /*, location: Location, router: Router
        router.events.subscribe((val) => {
          if(location.path() != ''){
            this.route = location.path();
          } else {
            this.route = 'Home'
          }
        });*/
    }

    ngOnInit(): void {
        this.isLoggedIn = !!this.tokenStorageService.getToken();

        if (this.isLoggedIn) {
            const user = this.tokenStorageService.getUser();
            this.username = user.username;
        }
    }

    logout(): void {
        this.tokenStorageService.signOut();
        window.location.reload();
    }
}
