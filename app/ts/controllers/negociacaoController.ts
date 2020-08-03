class NegociacaoController {
    private _inputData: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _negociacoes: Negociacoes;
    private _negociacoesView: NegociacoesView;

    constructor() {
        this._inputData = document.querySelector("#data");
        this._inputQuantidade = document.querySelector("#quantidade");
        this._inputValor = document.querySelector("#valor");
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView("#negociacoesView");

        this._negociacoesView.update();
    }

    adiciona(event: Event) {
        event.preventDefault();
        const negociacao = new Negociacao(
            new Date(this._inputData.value.replace(/-/g, ',')),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );
        this._negociacoes.adiciona(negociacao);
        this._negociacoes.paraArray().forEach(n => {
            console.log(n.data, n.quantidade, n.valor)
        })
    }
}