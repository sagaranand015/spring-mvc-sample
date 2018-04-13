angular.module('srApp').controller('mainHeaderController', mainHeaderController);

mainHeaderController.$inject = [ '$scope', '$rootScope', '$document', '$uibModal', 'dataFactory', 'ngToast' ];

function mainHeaderController($scope, $rootScope, $document, $uibModal, dataFactory, ngToast) {
	var vm = this;

	vm.initMainHeader = function initMainHeader() {
		console.log("logging mainHeaderController");

	};	

	vm.initMainHeader();

};
