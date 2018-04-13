angular.module('srApp').controller('navHeaderController', navHeaderController);

navHeaderController.$inject = [ '$scope', '$rootScope', '$document', '$uibModal', 'dataFactory', 'ngToast' ];

function navHeaderController($scope, $rootScope, $document, $uibModal, dataFactory, ngToast) {
	var vm = this;

	vm.initHeader = function initHeader() {
		console.log("logging navHeaderController");

		vm.headerAlertContent = dataFactory.getPageContents("pages/common/content/alertContent").then(function(response) {
			$rootScope.headerAlert = response.data.global;
		}, function(response) {
			ngToast.create({
				className: 'danger',
				content: 'Content could not be loaded. Please try again'
			});
		});
	};	

	vm.initHeader();

};
