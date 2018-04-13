angular.module('srApp').controller('howitworksController', howitworksController);

howitworksController.$inject = [ '$scope', '$rootScope', '$document', '$uibModal', 'dataFactory', 'ngToast' ];

function howitworksController($scope, $rootScope, $document, $uibModal, dataFactory, ngToast) {
	var vm = this;

	vm.initHowitworks = function initHowitworks() {
		console.log("logging howitworksController");
	};	

	vm.initHowitworks();

};
