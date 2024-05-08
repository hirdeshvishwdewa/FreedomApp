import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { GridItemHTMLElement, GridStack, GridStackNode } from 'gridstack';
import { IContainerConfig, IPageConfig } from 'src/app/modules/view/services/view.service';
import 'gridstack/dist/h5/gridstack-dd-native';
import { PageService } from '../../page.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit, AfterContentInit {
  @Input()
  page: IPageConfig | undefined;
  containers: IContainerConfig[] | undefined;
  grid: GridStack | undefined;
  constructor(pageService: PageService) {
    this.containers = this.page?.containers;
  }

  ngOnInit(): void {
    console.log('PageComponent | ngOnInit');
    setTimeout(() => {
      const gridClass: string = 'grid-stack'
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
    }, 0)
  }

  ngAfterContentInit(): void {
    console.log('PageComponent | ngAfterContentInit');
    this.containers = this.page?.containers;
  }

  onContainerReSize(evt: Event, item: GridItemHTMLElement | GridStackNode | GridStackNode[] | undefined): void {

  }
}
