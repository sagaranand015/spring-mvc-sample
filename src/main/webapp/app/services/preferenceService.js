angular
		.module('srApp')
		.service(
				'preferenceService',
				[
						'dataFactory',
						'ngToast',
						'$rootScope',
						'$http',
						function(dataFactory, ngToast, $rootScope, $http) {
							var vm = this;

							this.getUserPreferredLocations = function getUserPreferredLocations(
									userType) {
								if (userType != undefined && userType != null
										&& userType != "") {
									userType = userType.trim();

									return {
										getLocationData : function() {
											return dataFactory
													.getUserLocationPreferences(userType);
										}
									};
								}
							};

							// to get the UserPreferences for Compensation
							this.getUserPreferredCompensation = function getUserPreferredCompensation(
									userType) {
								if (userType != undefined && userType != null
										&& userType != "") {
									userType = userType.trim();
									return {
										getData : function() {
											return dataFactory
													.getUserCompensationPreferences(userType);
										}
									};
								}
							};

							// to get all the leagues for the given user
							this.getUserLeagues = function getUserLeagues(
									userType) {
								if (userType != undefined && userType != null
										&& userType != "") {
									userType = userType.trim();
									return {
										getLeaguesData : function() {
											return dataFactory
													.getUserLeagues(userType);
										}
									};
								}
							};

							// to get all the clubs for the given user
							this.getUserClubs = function getUserClubs(userType) {
								if (userType != undefined && userType != null
										&& userType != "") {
									userType = userType.trim();
									return {
										getClubsData : function() {
											return dataFactory
													.getUserClubs(userType);
										}
									};
								}
							};

							// to get all the leagues for the given user
							this.getUserPositions = function getUserPositions(
									userType) {
								if (userType != undefined && userType != null
										&& userType != "") {
									userType = userType.trim();
									return {
										getPositionsData : function() {
											return dataFactory
													.getUserPositions(userType);
										}
									};
								}
							};

							// to get all the leagues for the given user
							this.getUserGrades = function getUserGrades(
									userType) {
								if (userType != undefined && userType != null
										&& userType != "") {
									userType = userType.trim();
									return {
										getGradesData : function() {
											return dataFactory
													.getUserGrades(userType);
										}
									};
								}
							};

							// to get all the leagues for the given user
							this.getUserCategories = function getUserCategories(
									userType) {
								if (userType != undefined && userType != null
										&& userType != "") {
									userType = userType.trim();
									return {
										getCategoriesData : function() {
											return dataFactory
													.getUserCategories(userType);
										}
									};
								}
							};

							// to get all the leagues for the given user
							this.getUserCareerDetails = function getUserCareerDetails(
									userType) {
								if (userType != undefined && userType != null
										&& userType != "") {
									userType = userType.trim();
									return {
										getCareerDetailsData : function() {
											return dataFactory
													.getUserCareerDetails(userType);
										}
									};
								}
							};

						} ]);