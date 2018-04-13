angular.module('srApp').controller('contactController', contactController);

contactController.$inject = [ '$scope', '$rootScope', '$document', '$uibModal', 'dataFactory', 'ngToast' ];

function contactController($scope, $rootScope, $document, $uibModal, dataFactory, ngToast) {
	var vm = this;

	vm.initContact = function initContact() {
		console.log("logging contactController");
	};	

	vm.initContact();

};
