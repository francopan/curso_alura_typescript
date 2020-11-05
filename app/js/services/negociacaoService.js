System.register(["../models/index"], function (exports_1, context_1) {
    "use strict";
    var index_1, NegociacaoService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            NegociacaoService = class NegociacaoService {
                constructor() {
                    this.localHandler = (res) => {
                        if (res.ok) {
                            return res;
                        }
                        else {
                            throw new Error(res.statusText);
                        }
                    };
                }
                obterNegociacoes(handler) {
                    return fetch("http://localhost:8081/dados")
                        .then((res) => handler ? handler(res) : this.localHandler(res))
                        .then((value) => value.json())
                        .then((dados) => dados.map(dado => new index_1.Negociacao(new Date(), dado.vezes, dado.montante)))
                        .catch((err) => console.error(err));
                }
            };
            exports_1("NegociacaoService", NegociacaoService);
        }
    };
});
