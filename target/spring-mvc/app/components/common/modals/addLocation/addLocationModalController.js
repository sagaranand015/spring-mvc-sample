angular.module('srApp').controller('addLocationModalController',
		addLocationModalController);

addLocationModalController.$inject = [ '$scope', '$rootScope',
		'$uibModalInstance', 'data', 'dataFactory', 'ngToast',
		'preferenceService' ];

function addLocationModalController($scope, $rootScope, $uibModalInstance,
		data, dataFactory, ngToast, preferenceService) {
	var vm = this;

	$scope.data = data;

	$scope.cancel = function cancel() {
		$uibModalInstance.dismiss('cancel');
	};

	vm.initAddLocationModal = function initAddLocationModal() {
		console.log("Logging addLocationModalController...");
	};

	$scope.addNewLocation = function addNewLocation() {
		var addLocationReq = {
			"userAddress" : {
				"state" : $scope.preferredState,
				"city" : $scope.preferredCity
			}
		};

		vm.addPreferredLocation = dataFactory
				.addPreferredLocation($scope.data.userType, addLocationReq)
				.then(
						function(response) {
							console.log(response);

							ngToast
									.create({
										className : 'success',
										content : 'Woo! Successfully Added a your Preferred Location'
									});

							$rootScope.$emit("getAllLocations", {
								'userType' : 'player'
							});

							$scope.cancel();

						},
						function(response) {
							if (response.status == 400) {
								ngToast
										.create({
											className : 'danger',
											content : 'Looks like your input had a problem. Mind trying again?'
										});
							} else {
								ngToast
										.create({
											className : 'danger',
											content : 'Oops! We encountered an Error. Please try again.'
										});
							}
						});

	};

	// to remove the location for the given user
	$scope.removeLocation = function removeLocation(id) {

		console.log("Id to be removed: " + id);

		vm.removePreferredLocation = dataFactory
				.deletePreferredLocation('player', id)
				.then(
						function(response) {

							ngToast
									.create({
										className : 'success',
										content : 'Woo! Successfully Removed your Preferred Location'
									});

							// replace with the updateLocations thing()
							$rootScope.$emit("getAllLocations", {
								'userType' : 'player'
							});

							$scope.cancel();
						},
						function(response) {

							if (response.status == 400) {
								ngToast
										.create({
											className : 'danger',
											content : 'Looks like your input had a problem. Mind trying again?'
										});
							} else {
								ngToast
										.create({
											className : 'danger',
											content : 'Oops! We encountered an Error. Please try again.'
										});
							}

						});
	};

	vm.initAddLocationModal();

};