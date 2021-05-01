import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloorComponent } from './components/floor/floor.component';
import { TabViewModule } from 'primeng/tabview';
import { PageModule } from '../page/page.module';

@NgModule({
  declarations: [
    FloorComponent
  ],
  imports: [
    CommonModule,
    TabViewModule,
    PageModule
  ]
})
export class FloorModule { }
