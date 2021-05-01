import { Injectable, Type } from '@angular/core';
import { GridComponent } from '../views/grid/grid.component';

@Injectable({
  providedIn: 'root'
})
export class ViewService {
  viewInstancesList: ViewType[] | undefined;
  constructor() {
    this.viewInstancesList = [
      new ViewType(GridComponent, { name: 'Grid', properties: {} } as IViewConfig)
    ];
  }

  getViews() {
    return this.viewInstancesList;
  }

  getViewByName = (name: string): ViewType => {
    let viewInstance: ViewType = {} as ViewType;
    if (this.viewInstancesList) {
      this.viewInstancesList.map((instance: ViewType, i: number) => {
        if (instance.config.name === name) {
          viewInstance = instance;
        }
      });
    }
    return viewInstance;
  }
}

export class ViewType {
  constructor(public component: Type<any>, public config: IViewConfig) { }
}

export interface IViewStaticProperties {
  type?: string;
}
export interface IViewConfig {
  name: string;
  properties?: IViewStaticProperties;
}

export interface IContainerConfig {
  viewPort?: any;
  viewConfig?: IViewConfig;
}

export interface IPageConfig {
  id: string;
  title?: string;
  containers: IContainerConfig[];
}

export interface IFloorConfig {
  pages: IPageConfig[]
}
