angular.module('srApp').controller('addPositionModalController',
		addPositionModalController);

addPositionModalController.$inject = [ '$scope', '$rootScope',
		'$uibModalInstance', 'data', 'dataFactory', 'ngToast' ];

function addPositionModalController($scope, $rootScope, $uibModalInstance,
		data, dataFactory, ngToast) {
	var vm = this;

	$scope.data = data;

	$scope.cancel = function cancel() {
		$uibModalInstance.dismiss('cancel');
	};

	vm.initAddPositionModal = function initAddPositionModal() {
		console.log("Logging addPositionModalController...");

		vm.leaguesContent = dataFactory
				.getPageContents(
						"pages/common/content/dataContent")
				.then(
						function(response) { // success case
							$scope.positions = response.data.positions;
						},
						function(response) { // fail case
							ngToast
									.create({
										className : 'danger',
										content : 'Content could not be loaded. Please try again'
									});
						});

	};

	$scope.addNewPosition = function addNewPosition() {
		
		var addPositionReq = {
			"position" : {
				"positionName" : $scope.playerPosition.position,
				"positionDesc" : ''
			}
		};

		console.log(addPositionReq);

		vm.addPlayingPosition = dataFactory
				.addPlayingPosition($scope.data.userType, addPositionReq)
				.then(
						function(response) {
							console.log(response);

							ngToast
									.create({
										className : 'success',
										content : 'Woo! Successfully Added a your Playing Position'
									});

							$scope.cancel();

							// to update the user leagues in the UI from the API
							// call
							$rootScope.$emit("updatePlayingPositions", {
								'userType' : 'player'
							});

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

	$scope.removePosition = function removePosition(id) {
		vm.removePlayingLeague = dataFactory
				.deletePlayingPosition('player', id)
				.then(
						function(response) {

							ngToast
									.create({
										className : 'success',
										content : 'Woo! Successfully Removed your Playing Position'
									});

							// to update the user leagues in the UI from the API
							// call
							$rootScope.$emit("updatePlayingPositions", {
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

	vm.initAddPositionModal();

};