sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
    "sap/base/i18n/ResourceBundle"
], function (Controller, MessageToast, JSONModel, ResourceModel, ResourceBundle) {
    "use strict";


    return Controller.extend("com.trial.trialprojectwithnorthwind.controller.Home", {
        /*
        onInit() {
            // set data model on view
            
            const oObject = {
                recipient: {
                    name: "World"
                }
            };
            const oJsonModel = new JSONModel(oObject);
            this.getView().setModel(oJsonModel);


            // set i18n model on view
            const i18nModel = new ResourceModel({
                bundleName: "com.trial.trialprojectwithnorthwind.i18n.i18n"
            });
            this.getView().setModel(i18nModel, "i18n");


        },
        */

        //View oluşmadan önce tetiklenen methoddur. 
       onInit: function () {

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
            const sRecipient = this.getView().getModel().getProperty("/recipient/name");
            const sMsg = oBundle.getText("helloMsg", [sRecipient]);

            // show message
            MessageToast.show(sMsg);

        }

    });

});