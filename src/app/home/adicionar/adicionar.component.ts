import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit {

  permiteNewsLetter = false;
  text = "Adicionar Contas";

  constructor() { }


  ngOnInit() {
    setTimeout(() => {
      this.permiteNewsLetter = true;
    }, 5000);
  }

  onSubmit() {
    this.text = "Conta adicionada"
  }
}
