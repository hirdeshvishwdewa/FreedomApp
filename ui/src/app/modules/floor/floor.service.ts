import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ApiService } from '../shared/services/api.service';
import { IFloorConfig, IPageConfig } from '../view/services/view.service';

@Injectable({
  providedIn: 'root'
})
export class FloorService implements OnDestroy{
  floorConfig: IFloorConfig | undefined;
  pages: IPageConfig[] = [];

  private subscriptions: Subscription = new Subscription();
  constructor(private apiService: ApiService) { }

  init (initCallback: any) {
    this.subscriptions.add(this.getFloorConfiguration(initCallback));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getFloor (): Observable<any> {
    return this.apiService.get('floor');
  }

  private getFloorConfiguration(initCallback: any): Subscription {
    return this.getFloor().subscribe(() => {
      //TODO: init
    }, () => {
      console.log("getFloorConfiguration - Server Error;");
      this.initFloor(initCallback);
    });
  }

  private initFloor(initCallback: any) {
    this.floorConfig = {
      pages: [
        {
          id: 'page-1',
          title: 'Page 1',
          containers: [
            {
              viewConfig: {
                name: 'Grid',
                properties: {
                  type: 'grid'
                }
              }
            },
            {
              viewConfig: {
                name: 'Grid',
                properties: {
                  type: 'grid'
                }
              }
            },
            {
              viewConfig: {
                name: 'Grid',
                properties: {
                  type: 'grid'
                }
              }
            },
            {
              viewConfig: {
                name: 'Grid',
                properties: {
                  type: 'grid'
                }
              }
            },
          ]
        },
        {
          id: 'page-3',
          title: 'Page 3',
          containers: [
            {
              viewConfig: {
                name: 'Grid',
                properties: {
                  type: 'grid'
                }
              }
            }
          ]
        },
      ]
    };
    this.pages = this.floorConfig.pages;
    initCallback(this.floorConfig.pages);
  }
}
