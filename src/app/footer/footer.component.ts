import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  anioActual: number;

  constructor() {
    this.anioActual = new Date().getFullYear();
  }
}
