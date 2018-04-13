angular.module('srApp').controller('contentModalController', contentModalController);

contentModalController.$inject = ['$scope', '$rootScope', '$uibModalInstance', 'heading', 'content'];

function contentModalController($scope, $rootScope, $uibModalInstance, heading, content) {
	var vm = this;

	$scope.heading = heading;
	$scope.content = content;

	$scope.cancel = function cancel() {
		$uibModalInstance.dismiss('cancel');
	};

	vm.initContentModal = function initContentModal() {
		console.log("Logging ContentModal...");
	};

	vm.initContentModal();

};