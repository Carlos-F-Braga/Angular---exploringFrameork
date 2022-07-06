import { Component } from '@angular/core';
import { TransferenciaService } from './extrato/services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'dream';

  constructor(private service: TransferenciaService) {}

}
