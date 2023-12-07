import { Injectable, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root',
})
export class UserService extends ApiService implements OnDestroy {
    private unsubscribe = new Subject<void>();
    private apiURL: string = "";

    GetAllUser(payload: any) {
        let that = this;
        return new Promise((resolve, reject) => {
            that.post(that.apiURL + `/api/user`, payload).pipe(takeUntil(that.unsubscribe)).subscribe({
                next: (res: any) => {
                    resolve(res);
                },
                error: (err: any) => {
                    reject(that.handleError(err));
                }
            });
        });
    }

    ngOnDestroy() {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }
}