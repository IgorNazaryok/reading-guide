import { Component } from '@angular/core';
import { TooltipModule } from 'primeng/tooltip';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';

@Component({
  selector: 'app-plot-analysis',
  standalone: true,
  imports: [TooltipModule, HeaderComponent, FooterComponent],
  templateUrl: './plot-analysis.component.html',
  styleUrl: './plot-analysis.component.scss'
})
export class PlotAnalysisComponent {

}
