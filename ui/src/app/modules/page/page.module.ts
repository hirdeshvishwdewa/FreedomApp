import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './components/page/page.component';
import { ContainerModule } from '../container/container.module';
import { PageService } from './page.service';

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
  ],
  providers: [
    PageService
  ]
})
export class PageModule { }
