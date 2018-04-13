angular.module('srApp').controller('socialController',
		socialController);

socialController.$inject = [ '$scope', '$rootScope', 'ngToast',
		'dataFactory', '$state', '$stateParams' ];

function socialController($scope, $rootScope, ngToast, dataFactory,
		$state, $stateParams) {
	var vm = this;

	vm.initPlayerSocial = function initPlayerSocial() {
		console.log("logging socialController");

		// get the static contents
		vm.adminDashboardContent = dataFactory
				.getPageContents(
						"components/common/social/content/socialContent")
				.then(
						function(response) { // success case
							$rootScope.dashboardHeading = response.data.heading;
							$rootScope.dashboardSubHeading = response.data.subHeading;
							$rootScope.sections = response.data.sections;

							if ($rootScope.header.account.userName != undefined
									|| $rootScope.header.account.userName != ""
									|| $rootScope.header.account.userName != null) {
								$rootScope.dashboardHeading = $rootScope.header.account.userName
										+ " Social Media Settings";
							}

						},
						function(response) { // fail case
							ngToast
									.create({
										className : 'danger',
										content : 'Content could not be loaded. Please try again'
									});
						});

	};

	$scope.changeAttribute = function changeAttribute(id) {
		if (document.getElementById(id).disabled)
			document.getElementById(id).disabled = false;
		else
			document.getElementById(id).disabled  = true;	
	};

	vm.initPlayerSocial();

};