import { Component } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-episode-3',
  standalone: true,
  imports: [TooltipModule, HeaderComponent, FooterComponent, ImageModule],
  templateUrl: './episode-3.component.html',
  styleUrl: './episode-3.component.scss',
})
export class Episode3Component {}
