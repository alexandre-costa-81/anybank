import { Component, signal } from '@angular/core';
import { Banner } from "./banner/banner";
import { FormNovaTransacao } from "./form-nova-transacao/form-nova-transacao";
import { Transacao } from './modelos/transacao';

@Component({
  selector: 'app-root',
  imports: [Banner, FormNovaTransacao],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  transacoes = signal<Transacao[]>([]);

  processarTransacao(transacao: Transacao) {
    this.transacoes.update(transacoesAtuais => [transacao, ...transacoesAtuais]);

    console.log(this.transacoes());
  }
}
