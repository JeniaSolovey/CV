import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-divider',
  template: `
    <div
      [style.width]="vertical ? '1px' : '100%'"
      [style.height]="vertical ? '100%' : '1px'"
      [style.background]="gradient"
      [style.background-size]="'600% 600%'"
      class="divider"></div>`,
  styleUrls: ['divider.component.scss']
})
export class DividerComponent {
  public gradient: string;

  @Input() public vertical = false;

  constructor() {
    const startPoint = Math.round(Math.random() * 100);
    this.gradient = `linear-gradient(90deg, rgba(49, 49, 58, 1) 0%, rgba(250, 250, 250, 0.3) ${startPoint}%, rgba(49, 49, 58, 1) 100%)`;
  }
}
