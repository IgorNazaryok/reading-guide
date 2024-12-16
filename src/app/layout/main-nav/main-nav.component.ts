import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.scss',
})
export class MainNavComponent {
  isNavExpanded = false;
  isSabNavExpanded = false;

  toggleNav(type: 'main' | 'sub') {
    if (type === 'main') {
      this.isNavExpanded = !this.isNavExpanded;
    } else if (type === 'sub') {
      this.isSabNavExpanded = !this.isSabNavExpanded;
    }
  }
}
