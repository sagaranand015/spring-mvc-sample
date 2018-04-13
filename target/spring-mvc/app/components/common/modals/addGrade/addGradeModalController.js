angular.module('srApp').controller('addGradeModalController',
		addGradeModalController);

addGradeModalController.$inject = [ '$scope', '$rootScope',
		'$uibModalInstance', 'data', 'dataFactory', 'ngToast' ];

function addGradeModalController($scope, $rootScope, $uibModalInstance, data,
		dataFactory, ngToast) {
	var vm = this;

	$scope.data = data;

	$scope.cancel = function cancel() {
		$uibModalInstance.dismiss('cancel');
	};

	vm.initAddGradeModal = function initAddGradeModal() {
		console.log("Logging addGradeModalController...");
	};

	$scope.addNewGrade = function addNewGrade() {
		var addGrdeReq = {
			"grade" : {
				"gradePlayed" : $scope.playerGrade,
				"gradeYearPlayed" : $scope.playerGradeYear,
				"gradeGamePlayed" : $scope.playerGradeGame
			}
		};
		
		console.log(addGrdeReq);

		vm.addPlayingGrade = dataFactory
				.addPlayingGrade($scope.data.userType, addGrdeReq)
				.then(
						function(response) {
							console.log(response);

							ngToast
									.create({
										className : 'success',
										content : 'Woo! Successfully Added a your Playing Grade'
									});

							$scope.cancel();

							// to update the user leagues in the UI from the API
							// call
							$rootScope.$emit("updatePlayingGrades", {
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

	$scope.removeGrade = function removeGrade(id) {
		vm.removePlayingGrade = dataFactory
				.deletePlayingGrade('player', id)
				.then(
						function(response) {

							ngToast
									.create({
										className : 'success',
										content : 'Woo! Successfully Removed your Playing Grade'
									});

							// to update the user leagues in the UI from the API
							// call
							$rootScope.$emit("updatePlayingGrades", {
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

	vm.initAddGradeModal();

};