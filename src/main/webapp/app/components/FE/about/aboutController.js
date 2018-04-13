angular.module('srApp').controller('aboutController', aboutController);

aboutController.$inject = [ '$scope', '$rootScope', '$document', '$uibModal', 'dataFactory', 'ngToast' ];

function aboutController($scope, $rootScope, $document, $uibModal, dataFactory, ngToast) {
	var vm = this;

	vm.initAbout = function initAbout() {
		console.log("logging aboutController");
	};	

	vm.initAbout();

};
