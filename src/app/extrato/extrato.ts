import { Component } from '@angular/core';
import { Transacao } from "./transacao/transacao";

@Component({
  selector: 'app-extrato',
  imports: [Transacao],
  templateUrl: './extrato.html',
  styleUrl: './extrato.css',
})
export class Extrato {

}
