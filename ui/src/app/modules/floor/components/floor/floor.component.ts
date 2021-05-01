import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import 'gridstack/dist/h5/gridstack-dd-native';
import { GridItemHTMLElement, GridStack, GridStackNode } from 'gridstack';
import { IFloorConfig, IPageConfig } from 'src/app/modules/shared/interfaces/interfaces';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.scss']
})
export class FloorComponent implements OnInit, AfterViewInit, OnChanges {
  floorConfig: IFloorConfig | undefined;
  grid: GridStack | undefined;
  pageConfigs: IPageConfig[];
  constructor() {
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
    this.pageConfigs = this.floorConfig.pages;
  }

  ngOnInit(): void {
  }

  onPageChange($event: any): void {
    console.log('FloorComponent | onPageChange');
  }

  ngAfterViewInit(): void {
    console.log('FloorComponent | ngAfterViewInit');
    this.initGrid();
  }

  ngOnChanges(): void {
    console.log('FloorComponent | ngOnChanges');
  }

  onContainerReSize(evt: Event, item: GridItemHTMLElement | GridStackNode | GridStackNode[] | undefined): void {
    console.log('FloorComponent | onContainerReSize');
  }

  onContainerAdd(evt: Event, item: GridItemHTMLElement | GridStackNode | GridStackNode[] | undefined): void {
    console.log('FloorComponent | onContainerAdd');
  }

  initGrid(gridClass: string = 'grid-stack'): void {
    setTimeout(() => {
      // 1. Get all the elements with .grid-stack class.
      const pageGrids: HTMLCollectionOf<Element> = document.getElementsByClassName(gridClass);
      // 2. Iterate over the HTMLCollectionOf grid-stack class elements and initialize the grids.
      Array.prototype.forEach.call(pageGrids, (pageGrid) => {
        this.grid = GridStack.init({
          acceptWidgets: true,
          animate: true,
          auto: true,
          float: true,
          margin: '10px',
          removable: true,
        }, pageGrid);
        this.grid.on('resize', (evt, item) => this.onContainerReSize(evt, item));
      });
    }, 1);
  }
}
