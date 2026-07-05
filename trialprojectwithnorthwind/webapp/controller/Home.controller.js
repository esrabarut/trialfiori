sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "sap/base/i18n/ResourceBundle"
], (Controller, MessageToast, JSONModel, ResourceModel, ResourceBundle) => {
    "use strict";


    return Controller.extend("com.trial.trialprojectwithnorthwind.controller.Home", {
        onInit() {
            // set data model on view
            const oObject = {
                recipient: {
                    name: "World"
                }
            };
            const oJsonModel = new JSONModel(oObject);
            this.getView().setModel(oJsonModel);
        },

        onShowHello() {
            MessageToast.show("Hello World");
        }

    });

});