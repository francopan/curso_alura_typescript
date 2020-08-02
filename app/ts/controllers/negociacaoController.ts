class NegociacaoController {
    private _inputData: Date;
    private _inputQuantidade: number;
    private _inputValor: number;

    constructor() {
        this._inputData = document.querySelector("#data");
        this._inputQuantidade = document.querySelector("#quantidade");
        this._inputValor = document.querySelector("#valor");
    }

    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(
            this._inputData,
            this._inputQuantidade,
            this._inputValor
        );
        console.log(negociacao);
    }
}