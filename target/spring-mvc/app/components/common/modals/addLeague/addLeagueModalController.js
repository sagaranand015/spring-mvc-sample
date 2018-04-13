angular.module('srApp').controller('addLeagueModalController',
		addLeagueModalController);

addLeagueModalController.$inject = [ '$scope', '$rootScope',
		'$uibModalInstance', 'data', 'dataFactory', 'ngToast' ];

function addLeagueModalController($scope, $rootScope, $uibModalInstance, data,
		dataFactory, ngToast) {
	var vm = this;

	$scope.data = data;
	$scope.leagues = [];
	$scope.leagueRegion = "";

	$scope.cancel = function cancel() {
		$uibModalInstance.dismiss('cancel');
	};

	vm.initAddLeagueModal = function initAddLeagueModal() {
		console.log("Logging addLeagueModalController...");

		vm.leaguesContent = dataFactory.getPageContents(
				"pages/common/content/dataContent").then(function(response) { // success
			// case
			$scope.leagues = response.data.leagues;
		}, function(response) { // fail case
			ngToast.create({
				className : 'danger',
				content : 'Content could not be loaded. Please try again'
			});
		});

	};

	// to add a new league for the given player
	$scope.addNewLeague = function addNewLeague() {

		// to set the region for the selected league
		$scope.getLeagueRegion($scope.playerLeague.league);

		console.log("In adding new league");
		console.log($scope.data);

		var addLeagueReq = {
			"league" : {
				"leagueName" : $scope.playerLeague.league,
				"leagueDesc" : $scope.leagueRegion,
				"current" : $scope.data.isCurrent,
				"preferred" : !$scope.data.isCurrent
			}
		};

		vm.addPlayingLeague = dataFactory
				.addPlayingLeague($scope.data.userType, addLeagueReq)
				.then(
						function(response) {
							console.log(response);

							ngToast
									.create({
										className : 'success',
										content : 'Woo! Successfully Added a your Playing League'
									});

							// to update the user leagues in the UI from the API
							// call
							$rootScope.$emit("getAllLeagues", {
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

	$scope.removeLeague = function removeLeague(id) {
		vm.removePlayingLeague = dataFactory
				.deletePlayingLeague('player', id)
				.then(
						function(response) {

							ngToast
									.create({
										className : 'success',
										content : 'Woo! Successfully Removed your Playing League'
									});

							// to update the user leagues in the UI from the API
							// call
							$rootScope.$emit("getAllLeagues", {
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

	vm.initAddLeagueModal();

	// to get the region of the league from the league name
	$scope.getLeagueRegion = function getLeagueRegion(leagueName) {
		angular.forEach($scope.leagues, function(v, k) {
			if (v.league == leagueName) {
				$scope.leagueRegion = v.region;
				return;
			}
		});
	};

};