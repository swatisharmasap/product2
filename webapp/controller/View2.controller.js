sap.ui.define(
    ["sap/ui/core/mvc/Controller"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
      "use strict";
  
      return Controller.extend("sap.com.product2.controller.View2", {
        onInit: function () {
          const oRouter = this.getOwnerComponent().getRouter();
          oRouter.getRoute("RouteView2").attachPatternMatched(this.onObjectMatched, this);
        },
        onObjectMatched:function(oEvent){
        var value1 = oEvent.getParameter("arguments").v1
        var value2 = oEvent.getParameter("arguments").v2
        var value3 = oEvent.getParameter("arguments").v3
        var value4 = oEvent.getParameter("arguments").v4
        
        this.getView().byId("ProductID").setValue(value1);
         this.getView().byId("ProductName").setValue(value2);
         this.getView().byId("SupplierID").setValue(value3);
         this.getView().byId("CategoryID").setValue(value4);

        }
      });
    }
  );
  