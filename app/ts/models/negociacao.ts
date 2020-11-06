import { Igualavel, Imprimivel } from "./index";

export class Negociacao implements Imprimivel, Igualavel<Negociacao> {
  constructor(
    readonly data: Date,
    readonly quantidade: number,
    readonly valor: number
  ) {}

  get volume() {
    return this.quantidade * this.valor;
  }

  printText(): void {
    console.log(`Data: ${this.data}\nQuantidade: ${this.quantidade}\nValor: ${this.valor}`);
  }

  ehIgual(negociacao: Negociacao): boolean {

    return this.data.getDate() == negociacao.data.getDate()
        && this.data.getMonth() == negociacao.data.getMonth()
        && this.data.getFullYear() == negociacao.data.getFullYear();
  }
}
