sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "sap/base/i18n/ResourceBundle"
], function (Controller, MessageToast, JSONModel, ResourceModel, ResourceBundle) {
    "use strict";


    return Controller.extend("com.trial.trialprojectwithnorthwind.controller.Home", {
        
        //View oluşmadan önce tetiklenen methoddur. 
       onInit: function () {

        var oJsonData = {
            recipient: {
                name: "World"
            }
        };
        var oHomeModel = new JSONModel(oJsonData);
        this.getView().setModel(oHomeModel , "homeModel");

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

        onShowHello() {

            // read msg from i18n model
            const oBundle = this.getView().getModel("i18n").getResourceBundle();
            const sRecipient = this.getView().getModel("homeModel").getProperty("/recipient/name");
            const sMsg = oBundle.getText("helloMsg", [sRecipient]);
            // show message
            MessageToast.show(sMsg);

        },
        onNavigate() {
            this.getOwnerComponent().getRouter().navTo("main");

        }

    });

});