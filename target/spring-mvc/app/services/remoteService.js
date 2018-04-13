angular
		.module('srApp')
		.service(
				'remoteService',
				[
						'dataFactory',
						'ngToast',
						'$rootScope',
						'$http',
						function(dataFactory, ngToast, $rootScope, $http) {
							var vm = this;

							// to get the user Checkin Details for the logged in
							// user
							this.getUserCheckinDetails = function getUserCheckinDetails(
									userType) {
								if (userType != undefined && userType != null
										&& userType != "") {
									userType = userType.trim();
									return {
										getUserData : function() {
											return dataFactory
													.getUserCheckin(userType);
										}
									};
								}
							};

							// to get the Entities Details for showing to the
							// authenticated users
							this.getAllClubListings = function getAllClubListings(
									userType) {
								if (userType != undefined && userType != null
										&& userType != "") {
									userType = userType.trim();
									return {
										getClubListingsData : function() {
											return dataFactory
													.getAllClubListings(userType);
										}
									};
								}
							};
							
							// to get all the subscription plans for the club user
							this.getClubSubscriptionPlans = function getClubSubscriptionPlans(
									userType) {
								if (userType != undefined && userType != null
										&& userType != "") {
									userType = userType.trim();
									return {
										getClubSubscriptionPlans : function() {
											return dataFactory
													.getClubSubscriptionPlans(userType);
										}
									};
								}
							};

						} ]);