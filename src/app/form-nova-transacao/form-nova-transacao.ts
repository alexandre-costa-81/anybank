import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TipoTransacao, Transacao } from '../modelos/transacao';

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
    const transacao = new Transacao(
      this.tipoTransacao as TipoTransacao,
      Number(this.valorTransacao)
    );

    this.transacaoCriada.emit();
    this.tipoTransacao = "";
    this.valorTransacao = "";
  }
}
