import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './components/view/view.component';
import { ViewDirective } from './directives/view.directive';

@NgModule({
  declarations: [
    ViewComponent,
    ViewDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ViewComponent,
  ]
})
export class ViewModule { }
