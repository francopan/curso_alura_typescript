System.register(["./controllers/negociacaoController"], function (exports_1, context_1) {
    "use strict";
    var negociacaoController_1, negociacaoController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (negociacaoController_1_1) {
                negociacaoController_1 = negociacaoController_1_1;
            }
        ],
        execute: function () {
            negociacaoController = new negociacaoController_1.NegociacaoController();
            $(".form").submit(negociacaoController.adiciona.bind(negociacaoController));
        }
    };
});
