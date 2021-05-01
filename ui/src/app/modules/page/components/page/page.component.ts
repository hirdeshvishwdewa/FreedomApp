import { AfterContentInit, Component, Input, OnInit } from '@angular/core';
import { IContainerConfig, IPageConfig } from 'src/app/modules/shared/interfaces/interfaces';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit, AfterContentInit {
  @Input()
  page: IPageConfig | undefined;
  containers: IContainerConfig[] | undefined;
  constructor() {
    this.containers = this.page?.containers;
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    this.containers = this.page?.containers;
  }

}
