sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "sap/base/i18n/ResourceBundle"
], function (Controller, MessageToast, JSONModel, ResourceModel, ResourceBundle) {
    "use strict";

    return Controller.extend("com.trial.trialprojectwithnorthwind.controller.Main", {

        //View oluşmadan önce tetiklenen methoddur. 
        onInit: function () {

            // Router'a bağlan: "main" route'u manifest'te tanımlı olmalı
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("main").attachPatternMatched(this._onRouteMatched, this);

            var oJsonData = {
                Products: []  // başlangıçta boş dizi
            };
            var oMainModel = new JSONModel(oJsonData);
            this.getView().setModel(oMainModel, "mainModel");
            var oServiceModel = this.getView().getModel();
            //Northwind tarafından veri okuyup oMainModel modeline atayacağız.

            // Görünümü busy yap
            // this.getView().setBusy(true);

            // OData v2: Products entity set'ini oku
            // oServiceModel.read("/Products", {
            //     success: function (oData) {
            //         var aProducts = oData && oData.results ? oData.results : [];
            //         oMainModel.setProperty("/Products", aProducts);
            //         this.getView().setBusy(false);
            //     }.bind(this),
            //     error: function (oError) {
            //         this.getView().setBusy(false);
            //         MessageToast.show("Veri yüklenirken hata oluştu. Konsolu kontrol edin.");
            //         console.error(oError);
            //     }.bind(this)
            // });



        },
        _onRouteMatched: function (oEvent) {
            /*
            var oArgs = oEvent.getParameter("arguments") || {};
            if (oArgs.someId) {
              this.getView().getModel().setProperty("/currentId", oArgs.someId);
              
            }*/

        },
        //View görüntüsü oluşmadan önce tetiklenen methoddur. 
        onBeforeRendering: function () {
        },
        //View görüntüsü oluştuktan sonra tetiklenen methoddur. 
        onAfterRendering: function () {
        },
        //View sayfasından çıkarken tetiklenen methoddur.
        onExit: function () {
        },


    });
});