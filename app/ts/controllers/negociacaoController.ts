import { domInject } from '../helpers/decorators/domInjector';
import { Negociacoes, Negociacao } from '../models/index';
import { NegociacoesView, MensagemView } from '../views/index';

export class NegociacaoController {
    @domInject("#data")
    private _inputData: JQuery;
    @domInject("#quantidade")
    private _inputQuantidade: JQuery;
    @domInject("#valor")
    private _inputValor: JQuery;
    private _negociacoes: Negociacoes;
    private _negociacoesView: NegociacoesView;
    private _mensagmView: MensagemView;

    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView("#negociacoesView");
        this._mensagmView = new MensagemView("#mensagemView");
        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event: Event): void {
        event.preventDefault();

        const date = new Date(this._inputData.val().replace(/-/g, ','));

        if (!this._ehDiaUtil(date)) {
            this._mensagmView.update("A negociação deve ocorrer em dia útil");
            return;
        }

        const negociacao = new Negociacao(
            date,
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );
        
        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagmView.update("Negociação adicionada com sucesso!");
    }

    private _ehDiaUtil(date: Date): boolean {
        return date.getDay() !== DiaDaSemana.Domingo && date.getDay() !== DiaDaSemana.Sabado;
    }

}


enum DiaDaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta, 
    Quinta, 
    Sexta, 
    Sabado, 
}

