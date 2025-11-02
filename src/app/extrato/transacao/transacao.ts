import { Component, input } from '@angular/core';
import { Transacao } from '../../modelos/transacao';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-transacao',
  imports: [CurrencyPipe],
  templateUrl: './transacao.html',
  styleUrl: './transacao.css',
})
export class TransacaoComponent {
  transacao = input.required<Transacao>();
}
