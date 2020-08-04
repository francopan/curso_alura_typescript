System.register(["../models/negociacoes", "../models/negociacao", "../views/negociacoesView", "../views/mensagemView"], function (exports_1, context_1) {
    "use strict";
    var negociacoes_1, negociacao_1, negociacoesView_1, mensagemView_1, NegociacaoController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (negociacoes_1_1) {
                negociacoes_1 = negociacoes_1_1;
            },
            function (negociacao_1_1) {
                negociacao_1 = negociacao_1_1;
            },
            function (negociacoesView_1_1) {
                negociacoesView_1 = negociacoesView_1_1;
            },
            function (mensagemView_1_1) {
                mensagemView_1 = mensagemView_1_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._inputData = $("#data");
                    this._inputQuantidade = $("#quantidade");
                    this._inputValor = $("#valor");
                    this._negociacoes = new negociacoes_1.Negociacoes();
                    this._negociacoesView = new negociacoesView_1.NegociacoesView("#negociacoesView");
                    this._mensagmView = new mensagemView_1.MensagemView("#mensagemView");
                    this._negociacoesView.update(this._negociacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    const negociacao = new negociacao_1.Negociacao(new Date(this._inputData.val().replace(/-/g, ',')), parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacoes.adiciona(negociacao);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagmView.update("Negociação adicionada com sucesso!");
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
