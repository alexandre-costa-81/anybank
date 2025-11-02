import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  imports: [DatePipe],
  templateUrl: './banner.html',
  styleUrl: './banner.css',
})
export class Banner {
  dataAtual = new Date();
}
