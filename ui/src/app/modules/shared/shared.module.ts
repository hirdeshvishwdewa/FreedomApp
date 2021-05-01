import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


// Feature Modules
import { ContainerModule } from '../container/container.module';
import { ViewModule } from '../view/view.module';
import { TabViewModule } from 'primeng/tabview';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContainerModule,
    ViewModule,
    TabViewModule
  ],
  exports: [
    ContainerModule,
    ViewModule,
    TabViewModule
  ]
})
export class SharedModule { }
