import { Component, Input, OnInit } from '@angular/core';
import { IContainerConfig } from 'src/app/modules/view/services/view.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  @Input()
  containerConfig: IContainerConfig | undefined;

  constructor() {
  }

  ngOnInit(): void {}

  onChangeContainerConfig(): void {

  }
}
