import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './components/page/page.component';
import { ContainerModule } from '../container/container.module';

@NgModule({
  declarations: [
    PageComponent
  ],
  imports: [
    CommonModule,
    ContainerModule
  ],
  exports: [
    PageComponent
  ]
})
export class PageModule { }
