angular.module('srApp').controller('footerController', footerController);

footerController.$inject = [ '$scope', '$rootScope', '$document', '$uibModal', 'dataFactory', 'ngToast' ];

function footerController($scope, $rootScope, $document, $uibModal, dataFactory, ngToast) {
	var vm = this;

	vm.initFooter = function initFooter() {
		console.log("logging footerController");
	};	

	vm.initFooter();

};
