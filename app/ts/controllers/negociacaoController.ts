
import { domInject, throttle } from '../helpers/decorators/index';
import { Negociacoes, Negociacao } from '../models/index';
import { NegociacaoService } from '../services/index';
import { NegociacoesView, MensagemView } from '../views/index';
import { imprime } from '../helpers/utils/impressao';


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
    private _negociacaoService = new NegociacaoService();

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

        imprime(negociacao,this._negociacoes);

    }

    private _ehDiaUtil(date: Date): boolean {
        return date.getDay() !== DiaDaSemana.Domingo && date.getDay() !== DiaDaSemana.Sabado;
    }

    @throttle(500)
    importaDados():void {
        this._negociacaoService.obterNegociacoes().then(n => {
            n.forEach(negociacao => this._negociacoes.adiciona(negociacao));
            this._negociacoesView.update(this._negociacoes);
        })     
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

