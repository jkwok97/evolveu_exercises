import { Component, Output, EventEmitter } from "@angular/core";
import { Response } from '@angular/http';
import { DataStorageService } from '../shared/data-storage.services';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    constructor(private dataStorageService: DataStorageService){}
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

    onGetData() {
        this.dataStorageService.getRecipes();
    }
}