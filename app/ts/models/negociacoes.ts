import { Imprimivel } from './imprimivel';
import { Negociacao } from './negociacao';

export class Negociacoes implements Imprimivel {

    private _negociacoes:Array<Negociacao> = new Array<Negociacao>();

    adiciona(negociacao: Negociacao): void {
        this._negociacoes.push(negociacao);
    }

    paraArray(): Array<Negociacao> {
        return ([] as Array<Negociacao>).concat(this._negociacoes);
    }

    printText():void {
        console.log(JSON.stringify(this._negociacoes));
    }
}
