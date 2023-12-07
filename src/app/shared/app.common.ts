import { Injectable } from '@angular/core';
import { AppConstant } from "./app.constant";

@Injectable({
    providedIn: 'root',
})
export class AppCommon extends AppConstant {
    constructor() {
        super()
    }
}