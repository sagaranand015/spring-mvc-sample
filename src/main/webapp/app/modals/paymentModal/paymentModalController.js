angular.module('srApp').controller('paymentModalController',
		paymentModalController);

paymentModalController.$inject = [ '$scope', '$rootScope', '$uibModalInstance',
		'dataFactory', 'ngToast', 'data', ];

function paymentModalController($scope, $rootScope, $uibModalInstance,
		dataFactory, ngToast, data) {
	var vm = this;

	$scope.data = data;
	$scope.authToken = '';
	$scope.planId = '';

	$scope.cancel = function cancel() {
		$uibModalInstance.dismiss('cancel');
	};

	vm.initInputModal = function initInputModal() {
		console.log("Logging initPaymentModal...");

		if ($scope.data != undefined
				|| !angular.equals($scope.data.userData, {})) {
			$scope.txtName = $scope.data.userData.name;
			$scope.txtEmail = $scope.data.userData.email;
			$scope.txtMobile = $scope.data.userData.mobile;
			$scope.authToken = $scope.data.userData.authToken;
			$scope.planId = $scope.data.plan;
		} else {
			ngToast
					.create({
						className : 'warning',
						content : 'UnAuthorized Access. Plase <a href="login/club">Login Again</a>'
					});
		}

	};

	// to submit the payment form to the server
	$scope.submitPaymentForm = function submitPaymentForm() {
		ngToast.create({
			className : 'info',
			content : 'Please wait while we get your Subscription Activated...'
		});

		$uibModalInstance.dismiss('cancel');
		return false;
	};

	vm.initInputModal();

};