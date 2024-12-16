import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgStyle],
  template: `<header
    class="header"
    [ngStyle]="{ 'background-image': 'url(' + backgroundUrl + ')' }"
  ></header>`,
  styles: [
    `
      .header {
        background: no-repeat center center;
        background-size: cover;
        width: 100%;
        aspect-ratio: 1350 / 211;
      }
    `,
  ],
})
export class HeaderComponent {
  @Input() backgroundFile: string = 'home-header.png';
  get backgroundUrl(): string {
    return `/images/${this.backgroundFile}`;
  }
}
