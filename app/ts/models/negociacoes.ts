import { logarTempoExecucao } from '../helpers/index';
import { Negociacao } from './negociacao';

export class Negociacoes {

    private _negociacoes:Array<Negociacao> = new Array<Negociacao>();

    adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    paraArray(): Array<Negociacao> {
        return ([] as Array<Negociacao>).concat(this._negociacoes);
    }
}
