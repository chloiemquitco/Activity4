
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {

    return Controller.extend("com.training.exer1quitco.controller.MainView", {
        onInit() {
        },
        onAddItem: function (){
                var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
                var sMsg = oTextBundle.getText("addButtonMsg");
                this.fnDisplayMsg(sMsg);
                },
        
        onChangeMOP: function (oEvent) {
                var sSelectedKey = oEvent.getParameter("selectedItem").getProperty("key");
                var oMobileLabel = this.getView().byId("idLblPhone");
                var oMobileInput = this.getView().byId("idInputPhone");
                var oCreditLabel = this.getView().byId("idLblCredit");
                var oCreditInput = this.getView().byId("idInputCredit");
                var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
            if (sSelectedKey === "GCASH") {
                oCreditLabel.setVisible(false);
                oCreditInput.setVisible(false);
                oMobileLabel.setVisible(true);
                oMobileInput.setVisible(true);
                var sMsg = oTextBundle.getText("selectGcashMsg");
            } else if (sSelectedKey === "CC") {
                oMobileLabel.setVisible(false);
                oMobileInput.setVisible(false);
                oCreditLabel.setVisible(true);
                oCreditInput.setVisible(true);
                var sMsg = oTextBundle.getText("selectCCMsg");
            } else {
                oMobileLabel.setVisible(false);
                oMobileInput.setVisible(false);
                oCreditLabel.setVisible(false);
                oCreditInput.setVisible(false);
                var sMsg = oTextBundle.getText("selectCODMsg");
            }
            this.fnDisplayMsg(sMsg);
            },
            onPressCheckout: function () {
                var oInputFNameValue = this.getView().byId("idInptFName").getValue();
                var oInputLNameValue = this.getView().byId("idInptLName").getValue();
                var oTextBundle = this.getOwnerComponent().getModel("i18n").getResourceBundle();
                if (oInputFNameValue === "" || oInputLNameValue === "") {
                    var sMsg = oTextBundle.getText("requiredFieldBlankMsg");
                } else {
                    var sMsg = oTextBundle.getText("checkOutBttnPressed");
                }
                this.fnDisplayMsg(sMsg);
            },
            fnDisplayMsg: function (sMsg) {
                MessageToast.show(sMsg);
            }
    });
});
