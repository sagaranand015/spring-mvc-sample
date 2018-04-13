angular.module('srApp').controller('headlineController', headlineController);

headlineController.$inject = [ '$scope', '$rootScope', '$document', '$uibModal', 'dataFactory', 'ngToast' ];

function headlineController($scope, $rootScope, $document, $uibModal, dataFactory, ngToast) {
	var vm = this;

	vm.initHeadline = function initHeadline() {
		console.log("logging headlineController");
	};	

	vm.initHeadline();

};
