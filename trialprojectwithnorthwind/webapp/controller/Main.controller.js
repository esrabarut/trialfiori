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