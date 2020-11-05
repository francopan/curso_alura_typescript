import { Negociacao } from "../models/index";
import { NegociacaoParcial } from "../models/negociacaoParcial";

export class NegociacaoService {

    private localHandler: HandlerFunction = (res: Response) => {
        if (res.ok) {
            return res;
        } else {
            throw new Error(res.statusText);
        }
    }
  
    obterNegociacoes(handler?: HandlerFunction): Promise<Negociacao[]> {
        return <Promise<Negociacao[]>> fetch("http://localhost:8081/dados")
        .then((res) => handler ? handler(res) : this.localHandler(res))
        .then((value) => value.json())
        .then((dados: NegociacaoParcial[]) => 
            dados.map(dado => new Negociacao(new Date(), dado.vezes, dado.montante)))
        .catch((err) => console.error(err));
  }
}

export interface HandlerFunction {
    (res: Response): Response;
}
