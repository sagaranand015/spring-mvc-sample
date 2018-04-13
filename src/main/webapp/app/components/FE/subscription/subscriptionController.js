angular.module('srApp').controller('subscriptionController',
		subscriptionController);

subscriptionController.$inject = [ '$scope', '$rootScope', '$document',
		'$uibModal', 'dataFactory', 'ngToast', 'remoteService' ];

function subscriptionController($scope, $rootScope, $document, $uibModal,
		dataFactory, ngToast, remoteService) {
	var vm = this;

	vm.initSubscription = function initSubscription() {
		console.log("logging subscriptionController");

		// getting the plans data from Stripe account to be shown to the
		// customer
		$scope.plansData = [];
		remoteService
				.getClubSubscriptionPlans('club')
				.getClubSubscriptionPlans()
				.then(
						function(response) {
							console.log(response);
							$scope.plansData = response.data.plans.data;
						},
						function(response) {
							if (response.status == 400) {
								ngToast
										.create({
											className : 'warning',
											content : 'UnAuthorized Access. Plase <a href="login/club">Login Again</a>'
										});
							} else {
								ngToast.create({
									className : 'danger',
									content : response.data.message
								});
							}
						});

		$scope.userData = {};
		remoteService
				.getUserCheckinDetails('club')
				.getUserData()
				.then(
						function(response) {
							console.log(response);
							$scope.userData = {
								"authToken" : response.data.authToken,
								"name" : response.data.userInfo.userName,
								"email" : response.data.userInfo.userEmail,
								"mobile" : response.data.userInfo.userContact
							};

						},
						function(response) {
							if (response.status == 400) {
								ngToast
										.create({
											className : 'warning',
											content : 'UnAuthorized Access. Plase <a href="login/club">Login Again</a>'
										});
							} else {
								ngToast.create({
									className : 'danger',
									content : response.data.message
								});
							}
						});

	};

	$scope.openPaymentModal = function openPaymentModal(planId) {

		console.log("Plan Id is: " + planId);

		if (planId == '' || planId == "" || planId == undefined) {
			ngToast
					.create({
						className : 'danger',
						content : 'Content could not be loaded. Please try refreshing the page'
					});
		} else if ($scope.userData == undefined
				|| angular.equals($scope.userData, {})) {
			ngToast
					.create({
						className : 'danger',
						content : 'Content could not be loaded. Please try refreshing the page'
					});
		} else {
			var data = {
				"headline" : "Subscribe to Premier Recruits",
				"body" : {
					"para1" : "Please fill in the following details to continue and pay for your Subscription",
					"para2" : "Please Enter your Crdit/Debit Card Information below"
				},
				"plan" : planId,
				"userData" : $scope.userData
			};

			var modalInstance = $uibModal.open({
				animation : true,
				templateUrl : 'app/modals/paymentModal/paymentModal.jsp',
				controller : 'paymentModalController',
				size : 'lg',
				resolve : {
					data : function() {
						return data;
					}
				}
			});
		}
	};

	vm.initSubscription();

};
