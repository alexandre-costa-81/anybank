import { Component, output } from '@angular/core';
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

  transacaoCriada = output();

  aoSubmeter() {
    this.transacaoCriada.emit();
    this.tipoTransacao = "";
    this.valorTransacao = "";
  }
}
