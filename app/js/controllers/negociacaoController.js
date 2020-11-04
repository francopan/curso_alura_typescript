System.register(["../models/index", "../views/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, index_2, NegociacaoController, DiaDaSemana;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._inputData = $("#data");
                    this._inputQuantidade = $("#quantidade");
                    this._inputValor = $("#valor");
                    this._negociacoes = new index_1.Negociacoes();
                    this._negociacoesView = new index_2.NegociacoesView("#negociacoesView");
                    this._mensagmView = new index_2.MensagemView("#mensagemView");
                    this._negociacoesView.update(this._negociacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    const date = new Date(this._inputData.val().replace(/-/g, ','));
                    if (!this._ehDiaUtil(date)) {
                        this._mensagmView.update("A negociação deve ocorrer em dia útil");
                        return;
                    }
                    const negociacao = new index_1.Negociacao(date, parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacoes.adiciona(negociacao);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagmView.update("Negociação adicionada com sucesso!");
                }
                _ehDiaUtil(date) {
                    return date.getDay() !== DiaDaSemana.Domingo && date.getDay() !== DiaDaSemana.Sabado;
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
            (function (DiaDaSemana) {
                DiaDaSemana[DiaDaSemana["Domingo"] = 0] = "Domingo";
                DiaDaSemana[DiaDaSemana["Segunda"] = 1] = "Segunda";
                DiaDaSemana[DiaDaSemana["Terca"] = 2] = "Terca";
                DiaDaSemana[DiaDaSemana["Quarta"] = 3] = "Quarta";
                DiaDaSemana[DiaDaSemana["Quinta"] = 4] = "Quinta";
                DiaDaSemana[DiaDaSemana["Sexta"] = 5] = "Sexta";
                DiaDaSemana[DiaDaSemana["Sabado"] = 6] = "Sabado";
            })(DiaDaSemana || (DiaDaSemana = {}));
        }
    };
});
