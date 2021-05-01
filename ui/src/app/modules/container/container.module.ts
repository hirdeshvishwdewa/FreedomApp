import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './components/container/container.component';
import { ViewModule } from '../view/view.module';

@NgModule({
  declarations: [
    ContainerComponent
  ],
  imports: [
    CommonModule,
    ViewModule
  ],
  exports: [
    ContainerComponent
  ]
})
export class ContainerModule { }
