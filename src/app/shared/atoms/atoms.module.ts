import { NgModule } from '@angular/core';
import { TitleComponent } from './title/title.component';
import { DividerComponent } from './divider/divider.component';

const components = [
  TitleComponent,
  DividerComponent
];

@NgModule({
  declarations: components,
  exports: components
})
export class AtomsModule { }
