sap.ui.controller("fragments01.VIEW1", {
	Onpress : function(){
		//sap.ui.localResources("fragment");
		//get the fragment
		var fragment = sap.ui.xmlfragment(
		"idfrgment",
		"fragments01.file"
		
		)
		fragment.open();
	}

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf fragments01.VIEW1
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf fragments01.VIEW1
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf fragments01.VIEW1
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf fragments01.VIEW1
*/
//	onExit: function() {
//
//	}

});