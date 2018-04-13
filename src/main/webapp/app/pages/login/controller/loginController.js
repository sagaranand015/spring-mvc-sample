angular.module('srApp').controller('loginController', loginController);

loginController.$inject = [ '$scope', '$rootScope', 'dataFactory', 'ngToast',
		'$uibModal' ];

function loginController($scope, $rootScope, dataFactory, ngToast, $uibModal) {
	console.log("logging loginController");
	var vm = this;

	$rootScope.pageMenu = {};
	$rootScope.navHeight = "";

	$rootScope.showDisabledScreen = true;
	// On starting of the loading bar during any AJAX request
	$rootScope.$on('cfpLoadingBar:started', function(event, data) {
		$rootScope.showDisabledScreen = true;
	});
	// on ending of the loading bar during any AJAX request
	$rootScope.$on('cfpLoadingBar:completed', function(event, data) {
		$rootScope.showDisabledScreen = false;
	});

	vm.initLogin = function initLogin() {
		console.log("Init function in loginController");
		vm.navHeaderContent = dataFactory
				.getPageContents("pages/common/content/navHeaderContent")
				.then(
						function(response) {
							$rootScope.navHeader = response.data.navHeader;
							vm.footerContent = dataFactory
									.getPageContents(
											"pages/common/content/footerContent")
									.then(
											function(response) {
												$rootScope.footer = response.data.footer;
												vm.loginContent = dataFactory
														.getPageContents(
																"pages/login/content/loginContent")
														.then(
																function(
																		response) {
																	$rootScope.pageMenu = response.data.headerMenu;
																	$rootScope.login = response.data.login;
																	$rootScope.footer = response.data.footer;
																},
																function(
																		response) {
																	ngToast
																			.create({
																				className : 'danger',
																				content : 'Content could not be loaded. Please try again'
																			});
																});
											},
											function(response) {
												ngToast
														.create({
															className : 'danger',
															content : 'Content could not be loaded. Please try again'
														});
											});
						},
						function(response) {
							ngToast
									.create({
										className : 'danger',
										content : 'Content could not be loaded. Please try again'
									});
						});

	};

	$rootScope.$on('$includeContentLoaded', function(evt, templateName) {
		console.log("Loaded!" + templateName);
	});

	// to open the input modal
	$scope.sendAccountConfirmMail = function sendAccountConfirmMail(userType) {

		console.log("Usertype is: " + userType);

		console.log("++++++++++++++++++ CHECK HERE +++++++++++++++++++++")
		console.log('../app/modals/inputModal/inputModal.jsp')

		var data = {
			headline : "Re-send Account Confirmation Mail",
			body : "",
			userType: userType
		};
		var modalInstance = $uibModal.open({
			animation : true,
			templateUrl : '../app/modals/inputModal/inputModal.jsp',
			controller : 'inputModalController',
			size : 'md',
			resolve : {
				data : function() {
					return data;
				},
				isEmailConfirm : function() {
					return true;
				},
				isForgotPassword : function() {
					return false;
				}
			}
		});
	};

	$scope.showForgotPasswordModal = function showForgotPasswordModal() {
		var data = {
			headline : "Forgot Password - PR",
			body : ""
		};
		var modalInstance = $uibModal.open({
			animation : true,
			templateUrl : 'app/modals/inputModal/inputModal.jsp',
			controller : 'inputModalController',
			size : 'md',
			resolve : {
				data : function() {
					return data;
				},
				isEmailConfirm : function() {
					return false;
				},
				isForgotPassword : function() {
					return true;
				}
			}
		});
	};

	vm.initLogin();

}