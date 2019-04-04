import { Component, Output, EventEmitter } from "@angular/core";
import { Response } from '@angular/http';

import { DataStorageService } from '../shared/data-storage.services';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    constructor(
        private dataStorageService: DataStorageService,
        private authService: AuthService
        ){}
    // @Output() featureSelected: EventEmitter<string> = new EventEmitter<string>();

    // onSelect(feature: string) {
    //     this.featureSelected.emit(feature);
    // }

    onSaveData() {
        this.dataStorageService.storeRecipes().subscribe(
            (response: Response) => {
                console.log(response);
            }
        );
    }

    onLogout() {
        this.authService.logout();
    }

    onGetData() {
        this.dataStorageService.getRecipes();
    }
}