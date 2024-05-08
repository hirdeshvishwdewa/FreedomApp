import { AfterViewInit, Component, OnChanges, OnInit } from '@angular/core';
import { IPageConfig } from 'src/app/modules/view/services/view.service';
import { FloorService } from '../../floor.service';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.scss']
})
export class FloorComponent implements OnInit, AfterViewInit, OnChanges {
  pages: IPageConfig[] = [];


  constructor(private floorService: FloorService) {
  }
  
  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    console.log('FloorComponent | ngAfterViewInit');
    this.initFloor();
  }

  ngOnChanges(): void {
    console.log('FloorComponent | ngOnChanges');
  }
  
  onPageChange($event: any): void {
    console.log('FloorComponent | onPageChange');
  }

  initFloor(): void {
    this.floorService.init((pages: IPageConfig[]) => {
      this.pages = pages;
    });
  }
}
