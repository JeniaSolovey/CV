import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-text',
  template: '{{currentText}}'
})
export class DynamicTextComponent implements OnInit {
  @Input() titles: string[];
  state: 'writing' | 'clearing';
  currentText = '';

  async ngOnInit(): Promise<void> {
    for (const title of this.titles) {
      await this.writeTitle(title);
    }
  }

  private async writeTitle(title: string): Promise<void> {
    if (this.currentText.length) { await this.clearTitle(); }
    return new Promise(resolve => {
      let i = 0;
      const intervalRef = setInterval(() => {
        this.currentText += title[i++];
        if (i === title.length) {
          clearInterval(intervalRef);
          resolve();
        }
      }, 100);
    });
  }

  private async clearTitle(): Promise<void> {
    return new Promise(resolve => {
      setTimeout(() => {
        let i = this.currentText.length;
        const intervalRef = setInterval(() => {
          if (i-- <= 0) {
            clearInterval(intervalRef);
            resolve();
          }
          this.currentText = this.currentText.slice(0, -1);
        }, 100);
      }, 1000);
    });
  }
}
