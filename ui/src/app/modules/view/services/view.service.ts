import { Injectable, Type } from '@angular/core';
import { IViewConfig } from '../../shared/interfaces/interfaces';
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

  getViews(): ViewType[] | undefined {
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
