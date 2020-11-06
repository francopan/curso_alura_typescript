import { Imprimivel } from "./imprimivel";

export class Negociacao implements Imprimivel {
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
}
