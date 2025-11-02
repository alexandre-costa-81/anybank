import { Component, computed, signal } from '@angular/core';
import { Banner } from "./banner/banner";
import { FormNovaTransacao } from "./form-nova-transacao/form-nova-transacao";
import { TipoTransacao, Transacao } from './modelos/transacao';

@Component({
  selector: 'app-root',
  imports: [Banner, FormNovaTransacao],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  transacoes = signal<Transacao[]>([]);
  saldo = computed(() => {
    return this.transacoes().reduce((total, transacao) => {
      switch (transacao.tipo) {
        case TipoTransacao.DEPOSITO:
          return total + transacao.valor;
        case TipoTransacao.SAQUE:
          return total - transacao.valor;
        default:
          throw new Error("Tipo de transação inválido");
      }
    }, 0);
  });

  processarTransacao(transacao: Transacao) {
    this.transacoes.update(transacoesAtuais => [transacao, ...transacoesAtuais]);
  }
}
