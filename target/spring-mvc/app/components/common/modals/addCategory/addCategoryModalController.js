angular.module('srApp').controller('addCategoryModalController',
		addCategoryModalController);

addCategoryModalController.$inject = [ '$scope', '$rootScope',
		'$uibModalInstance', 'data', 'dataFactory', 'ngToast' ];

function addCategoryModalController($scope, $rootScope, $uibModalInstance,
		data, dataFactory, ngToast) {
	var vm = this;

	$scope.data = data;

	$scope.cancel = function cancel() {
		$uibModalInstance.dismiss('cancel');
	};

	vm.initAddCategoryModal = function initAddCategoryModal() {
		console.log("Logging addCategoryModalController...");

		vm.leaguesContent = dataFactory
				.getPageContents(
						"pages/common/content/dataContent")
				.then(
						function(response) { // success case
							$scope.categories = response.data.categories;
						},
						function(response) { // fail case
							ngToast
									.create({
										className : 'danger',
										content : 'Content could not be loaded. Please try again'
									});
						});

	};

	$scope.addNewCategory = function addNewCategory() {
		var addCategoryReq = {
			"category" : {
				"categoryName" : $scope.playerCategory.category,
				"categoryDesc" : ''
			}
		};

		vm.addPlayingCategory = dataFactory
				.addPlayingCategory($scope.data.userType, addCategoryReq)
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
							$rootScope.$emit("updatePlayingCategories", {
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

	// to remove the category for the given user using the remote API call
	$scope.removeCategory = function removeCategory(id) {
		vm.removePlayingCategory = dataFactory
				.deletePlayingCategory('player', id)
				.then(
						function(response) {

							ngToast
									.create({
										className : 'success',
										content : 'Woo! Successfully Removed your Playing Grade'
									});

							// to update the user leagues in the UI from the API
							// call
							$rootScope.$emit("updatePlayingCategories", {
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

	vm.initAddCategoryModal();

};