import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TabelaComponentModel } from './tabela-model';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit,OnDestroy {

  permiteNewsLetter = false;
  text = "Adicionar Contas";
  dtOptions: DataTables.Settings = {};
  lista: TabelaComponentModel[] = [];


  checkoutForm = this.formBuilder.group({
    conta: '',
    valor: '',
    dataOperacao: '',
    status:''
});
  constructor(private formBuilder: FormBuilder) {
  }

  onSubmit(): void {
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.lista.push(new TabelaComponentModel(this.checkoutForm.value.conta,
      this.checkoutForm.value.valor, this.checkoutForm.value.dataOperacao, this.checkoutForm.value.status));
    this.checkoutForm.reset();

    this.text = "Conta adicionada"

  }

  ngOnInit(): void {
    this.lista.push(new TabelaComponentModel('Transporte',-269.03, new Date(), 'Pago'));
    this.lista.push(new TabelaComponentModel('Gás',-100.03, new Date(), 'Pago'));

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 6
  };

  setTimeout(() => {
    this.permiteNewsLetter = true;
  }, 5000);

}
  ngOnDestroy(): void {
  }

}
