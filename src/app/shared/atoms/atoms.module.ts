import { NgModule } from '@angular/core';
import { TitleComponent } from './title/title.component';
import { DividerComponent } from './divider/divider.component';
import { DynamicTextComponent } from './dynamic-text/dynamic-text.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const components = [
  TitleComponent,
  DividerComponent,
  DynamicTextComponent,
  ImageSliderComponent
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: components
})
export class AtomsModule {}
