import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild } from '@angular/core';
import { ViewDirective } from '../../directives/view.directive';
import { IViewConfig, ViewService } from '../../services/view.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  @Input()
  viewConfig: IViewConfig | undefined;
  @ViewChild(ViewDirective, { static: true })
  viewHost: ViewDirective | undefined;

  constructor(private viewService: ViewService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.loadComponent();
  }

  loadComponent = (): void => {
    if (this.viewConfig && this.viewConfig.name) {
      const view = this.viewService.getViewByName(this.viewConfig.name);
      if (view) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(view.component);
        if (this.viewHost) {
          const viewContainerRef = this.viewHost.viewContainerRef;
          viewContainerRef.clear();
          const componentRef = viewContainerRef.createComponent<IViewConfig>(componentFactory);
          componentRef.instance.properties = this.viewConfig.properties;
        }
      }
    }
  }
}
