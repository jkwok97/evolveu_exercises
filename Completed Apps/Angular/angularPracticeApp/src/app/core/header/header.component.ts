import { Component } from "@angular/core";
// import { HttpEvent, HttpEventType } from '@angular/common/http';

import { DataStorageService } from '../../shared/data-storage.services';
import { AuthService } from '../../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    constructor(
        private dataStorageService: DataStorageService,
        private authService: AuthService
        ){}

    onSaveData() {
        this.dataStorageService.storeRecipes().subscribe(
            (response) => {
                console.log(response);
            }
        );
    }

    isAuthenticated() {
        return this.authService.isAuthenticated();
    }

    onLogout() {
        this.authService.logout();
    }

    onGetData() {
        this.dataStorageService.getRecipes();
    }
}