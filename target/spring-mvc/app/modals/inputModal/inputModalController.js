angular.module('srApp')
		.controller('inputModalController', inputModalController);

inputModalController.$inject = [ '$scope', '$rootScope', '$uibModalInstance',
		'dataFactory', 'ngToast', 'data', 'isEmailConfirm', 'isForgotPassword' ];

function inputModalController($scope, $rootScope, $uibModalInstance,
		dataFactory, ngToast, data, isEmailConfirm, isForgotPassword) {
	var vm = this;

	$scope.data = data;
	$scope.isEmailConfirm = isEmailConfirm;
	$scope.isForgotPassword = isForgotPassword;

	$scope.cancel = function cancel() {
		$uibModalInstance.dismiss('cancel');
	};

	vm.initInputModal = function initInputModal() {
		console.log("Logging initInputModal...");
	};

	$scope.submitConfirmEmailReq = function submitConfirmEmailReq() {
		var confirmEmailReq = {
			to : [ {
				"email" : $scope.txtEmailConfirmEmail.trim(),
				"name" : ""
			} ]
		};

		vm.submitConfirmEmailReq = dataFactory
				.resendConfirmEmail(data.userType, confirmEmailReq)
				.then(
						function(response) {
							ngToast
									.create({
										className : 'success',
										content : response.data.message
												+ ". Please check your Inbox/Spam for the Confirmation Link"
									});

							$uibModalInstance.dismiss('cancel');

						},
						function(response) {
							if (response.status == 400) {
								ngToast
										.create({
											className : 'warning',
											content : response.data.message
													+ ". Please check the Email Address Entered"
										});
							} else {
								ngToast.create({
									className : 'danger',
									content : response.data.message
								});
							}
						});

	};

	$scope.submitForgotPasswordEmailReq = function submitForgotPasswordEmailReq() {
		var forgotPwdReq = {
			to : [ {
				"email" : $scope.txtForgotPwdEmail.trim(),
				"name" : ""
			} ]
		};

		console.log(forgotPwdReq);

		vm.submitforgotPwdReq = dataFactory
				.sendPwdResetMail(forgotPwdReq)
				.then(
						function(response) {
							ngToast
									.create({
										className : 'success',
										content : response.data.message
												+ ". Please check your Inbox/Spam for the Confirmation Link"
									});

							$uibModalInstance.dismiss('cancel');

						},
						function(response) {
							if (response.status == 400) {
								ngToast
										.create({
											className : 'warning',
											content : response.data.message
													+ ". Please check the Email Address Entered"
										});
							} else {
								ngToast.create({
									className : 'danger',
									content : response.data.message
								});
							}
						});
	};

	vm.initInputModal();

};