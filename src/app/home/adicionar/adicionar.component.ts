import { Component,OnDestroy,OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TabelaComponentModel } from '../tabela/tabela-model';

@Component({
  selector: 'app-adicionar',
  templateUrl: './adicionar.component.html',
  styleUrls: ['./adicionar.component.css']
})
export class AdicionarComponent implements OnInit,OnDestroy {

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

  // ngOnInit() {
  //   setTimeout(() => {
  //     this.permiteNewsLetter = true;
  //   }, 5000);
  // }

  // onSubmit() {
  //   this.text = "Conta adicionada"
  // }
//   onSubmit(): void {
//     console.warn('Your order has been submitted', this.checkoutForm.value);
//     this.lista.push(new TabelaComponentModel(this.checkoutForm.value.conta,
//       this.checkoutForm.value.valor, this.checkoutForm.value.dataOperacao, this.checkoutForm.value.status));
//     this.checkoutForm.reset();
//   }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 6
  };
}

  ngOnDestroy(): void {
  }
}


