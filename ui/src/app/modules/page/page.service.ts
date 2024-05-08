import { Injectable, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { ApiService } from "../shared/services/api.service";

@Injectable()
export class PageService implements OnDestroy {

    private subscriptions: Subscription = new Subscription();

    constructor(private apiService: ApiService) {
        console.log('PageService - constructor called');
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }
}