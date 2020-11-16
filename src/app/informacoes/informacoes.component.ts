import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-informacoes',
  templateUrl: './informacoes.component.html',
  styleUrls: ['./informacoes.component.css']
})
export class InformacoesComponent implements OnInit {

  // inicializar a variavel como false
  condition: boolean = false;

  // informações que vem do component pai
  @Input() informacoes;

  // titulo do component
  @Input() title: String;

  constructor() { }

  ngOnInit(): void {

  }

}
