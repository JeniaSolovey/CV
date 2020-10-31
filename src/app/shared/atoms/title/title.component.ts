import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  template: '<h3><ng-content></ng-content></h3>',
  styleUrls: ['title.component.scss']
})
export class TitleComponent {}
