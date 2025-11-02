import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-nova-transacao',
  imports: [FormsModule],
  templateUrl: './form-nova-transacao.html',
  styleUrl: './form-nova-transacao.css',
})
export class FormNovaTransacao {
  valorTransacao = "";
  tipoTransacao = "";

  aoSubmeter() {
    console.log('Tipo de transação:', this.tipoTransacao);
    console.log('Transação submetida com valor:', this.valorTransacao);
  }
}
