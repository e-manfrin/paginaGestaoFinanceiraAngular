export class TabelaComponentModel{
  conta: string
  valor: number
  dataOperacao: Date
  status: string


  constructor(conta:string,valor: number, dataOperacao: Date, status: string) {
    this.conta = conta
    this.valor = valor
    this.dataOperacao = dataOperacao
    this.status = status
  }
}
