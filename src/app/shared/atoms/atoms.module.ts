import { NgModule } from '@angular/core';
import { TitleComponent } from './title/title.component';
import { DividerComponent } from './divider/divider.component';
import { DynamicTextComponent } from './dynamic-text/dynamic-text.component';

const components = [
  TitleComponent,
  DividerComponent,
  DynamicTextComponent
];

@NgModule({
  declarations: components,
  exports: components
})
export class AtomsModule {}
