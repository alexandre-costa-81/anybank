import { Component, computed, signal } from '@angular/core';
import { Banner } from "./banner/banner";
import { FormNovaTransacao } from "./form-nova-transacao/form-nova-transacao";
import { Transacao } from './modelos/transacao';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Banner, FormNovaTransacao, CurrencyPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  transacoes = signal<Transacao[]>([]);
  saldo = computed(() => {
    return this.transacoes().reduce((total, transacao) => {
      switch (transacao.tipo) {
        case "deposito":
          return total + transacao.valor;
        case "saque":
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
