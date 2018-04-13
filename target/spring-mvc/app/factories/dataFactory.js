angular
		.module('srApp')
		.factory(
				'dataFactory',
				[
						'$http',
						'$q',
						'$rootScope',
						function($http, $q, $rootScope) {

							// all the HTTP Request functions for reading from
							// Remote hosts
							var dataFactory = {};

							// to set the page content based on the page name
							// passed
							dataFactory.getPageContents = function(fileName) {
								// this is for the pages not requiring the con
								// parameter
								 if(con == '' || con == "" || con == undefined || con == null || con == "undefined") {
									 return $http.get("app/" + fileName + ".json");
								 }
								 return $http.get(con + "/app/" + fileName + ".json");
							};

							// to send the contact mail to the admin and the
							// user
							dataFactory.resendConfirmEmail = function resendConfirmEmail(userType, 
									confirmEmailReq) {
								// this is for the pages not requiring the con
								// parameter
								
								console.log("con is: " + con);
								
								 if(con == '' || con == "" || con == undefined || con == null || con == "undefined") {
									 return $http.post("api/sendConfirmEmail/" + userType, confirmEmailReq);
								 }
								 return $http.post(con + "/api/sendConfirmEmail/" + userType, confirmEmailReq);
								 // return $http.post("api/sendConfirmEmail/"
									// + userType, confirmEmailReq);
							};

							// to send the password reset mail to the user
							dataFactory.sendPwdResetMail = function sendPwdResetMail(
									forgotPwdReq) {
								return $http.post("api/password/reset/mail",
										forgotPwdReq);
							};

							// to get the checkin details of the user after
							// login
							dataFactory.getUserCheckin = function getUserCheckin(
									userType) {
								return $http.get("checkin/" + userType);
							};

							// to get the id, name and email of all entities for
							// the given entity type
							dataFactory.getAllClubListings = function getAllClubListings(
									userType) {
								return $http.get(userType + "/club/listings",
										{
									headers : {
										'Authorization' : 'Bearer '
												+ $rootScope.authToken
									}
								});
							};

							// to update the profile desc from all the users
							// portal
							dataFactory.updateProfileDesc = function updateProfileDesc(
									userType, updateDescReq) {
								return $http.post(userType
										+ "/profile/desc/update",
										updateDescReq, {
											headers : {
												'Authorization' : 'Bearer '
														+ $rootScope.authToken
											}
										});
							};

// // to update the UserMetrics of the given user
// dataFactory.updateUserMetrics = function updateUserMetrics(
// userType, updateMetricsReq) {
// return $http.post(userType + "/metrics/update",
// updateMetricsReq, {
// headers : {
// 'Authorization' : 'Bearer '
// + $rootScope.authToken
// }
// });
// };
//
// // to get the user metrics for the given user
// dataFactory.getUserMetrics = function getUserMetrics(
// userType) {
// return $http.get(userType + "/profile/metrics",
// {
// headers : {
// 'Authorization' : 'Bearer '
// + $rootScope.authToken
// }
// });
// };

							// to get the location Preferences of the given user
							dataFactory.getUserLocationPreferences = function getUserLocationPreferences(
									userType) {
								return $http.get(userType
										+ "/preference/location", {
									headers : {
										'Authorization' : 'Bearer '
												+ $rootScope.authToken
									}
								});
							};
							
							// to update the current locaiton of the given user
							dataFactory.updateCurrentUserLocation = function updateCurrentUserLocation(userType, updateRequest) {
								return $http.post(userType
										+ "/preference/current/location/update",
										updateRequest, {
											headers : {
												'Authorization' : 'Bearer '
														+ $rootScope.authToken
											}
										});
							};

							// to add a new preferred location for the given
							// user and type of user
							dataFactory.addPreferredLocation = function addPreferredLocation(
									userType, preferredLocationReq) {
								return $http.post(userType
										+ "/preference/location/add",
										preferredLocationReq, {
											headers : {
												'Authorization' : 'Bearer '
														+ $rootScope.authToken
											}
										});
							};

							// to delete the preferred location, given the id
							dataFactory.deletePreferredLocation = function deletePreferredLocation(
									userType, id) {
								return $http.delete(userType
										+ "/preference/location/delete/" + id, {
											headers : {
												'Authorization' : 'Bearer '
														+ $rootScope.authToken
											}
										});
							};
							
							// to get the location Preferences of the given user
							dataFactory.getUserCompensationPreferences = function getUserCompensationPreferences(
									userType) {
								return $http.get(userType
										+ "/preference/compensation", {
									headers : {
										'Authorization' : 'Bearer '
												+ $rootScope.authToken
									}
								});
							};

							// to update the user Compensation Details for the
							// given user
							dataFactory.updateCompensationPreferences = function updateCompensationPreferences(userType, updateCompReq) {
								return $http.post(userType
										+ "/preference/compensation/update",
										updateCompReq, {
											headers : {
												'Authorization' : 'Bearer '
														+ $rootScope.authToken
											}
										});
							}; 
							
							// to get all the leagues for the given user
							dataFactory.getUserLeagues = function getUserLeagues(
									userType) {
								return $http.get(userType
										+ "/preference/leagues", {
									headers : {
										'Authorization' : 'Bearer '
												+ $rootScope.authToken
									}
								});
							};
							
							// to get all the clubs for the given user
							dataFactory.getUserClubs = function getUserClubs(
									userType) {
								return $http.get(userType
										+ "/preference/clubs", {
									headers : {
										'Authorization' : 'Bearer '
												+ $rootScope.authToken
									}
								});
							};
							
							// to add a new playing league for the given user
							dataFactory.addPlayingLeague = function addPlayingLeague(userType, addLeagueReq) {
								return $http.post(userType
										+ "/preference/league/add",
										addLeagueReq, {
											headers : {
												'Authorization' : 'Bearer '
														+ $rootScope.authToken
											}
										});
							};
							
							// to delete the playing league for the given user
							dataFactory.deletePlayingLeague = function deletePlayingLeague(userType, id) {
								return $http.delete(userType
										+ "/preference/league/delete/" + id, {
											headers : {
												'Authorization' : 'Bearer '
														+ $rootScope.authToken
											}
										});
							};
							
							// to get all the positions for the given user
							dataFactory.getUserPositions = function getUserPositions(userType) {
								return $http.get(userType
										+ "/preference/positions", {
									headers : {
										'Authorization' : 'Bearer '
												+ $rootScope.authToken
									}
								});
							};
							
							// to delete the playing position for the given user
							dataFactory.deletePlayingPosition = function deletePlayingPosition(userType, id) {
								return $http.delete(userType
										+ "/preference/position/delete/" + id, {
											headers : {
												'Authorization' : 'Bearer '
														+ $rootScope.authToken
											}
										});
							};
							
							// to add a new playing position for the user in the
							// db
							dataFactory.addPlayingPosition = function addPlayingPosition(userType, addPositionReq) {
								return $http.post(userType
										+ "/preference/position/add",
										addPositionReq, {
											headers : {
												'Authorization' : 'Bearer '
														+ $rootScope.authToken
											}
										});
							};

							// to get all the positions for the given user
							dataFactory.getUserGrades = function getUserGrades(userType) {
								return $http.get(userType
										+ "/preference/grades", {
									headers : {
										'Authorization' : 'Bearer '
												+ $rootScope.authToken
									}
								});
							};
							
							// to add a new playing position for the user in the
							// db
							dataFactory.addPlayingGrade = function addPlayingGrade(userType, addGradeReq) {
								return $http.post(userType
										+ "/preference/grade/add",
										addGradeReq, {
											headers : {
												'Authorization' : 'Bearer '
														+ $rootScope.authToken
											}
										});
							};
							
							// to delete the playing grade for the given user
							dataFactory.deletePlayingGrade = function deletePlayingGrade(userType, id) {
								return $http.delete(userType
										+ "/preference/grade/delete/" + id, {
											headers : {
												'Authorization' : 'Bearer '
														+ $rootScope.authToken
											}
										});
							};
							
							// to get all the positions for the given user
							dataFactory.getUserCategories = function getUserCategories(userType) {
								return $http.get(userType
										+ "/preference/categories", {
									headers : {
										'Authorization' : 'Bearer '
												+ $rootScope.authToken
									}
								});
							};
							
							// to add a new category for the given user
							dataFactory.addPlayingCategory = function addPlayingCategory(userType, addCategoryReq) {
								return $http.post(userType
										+ "/preference/category/add",
										addCategoryReq, {
											headers : {
												'Authorization' : 'Bearer '
														+ $rootScope.authToken
											}
										});
							};
							
							// to delete the playing grade for the given user
							dataFactory.deletePlayingCategory = function deletePlayingCategory(userType, id) {
								return $http.delete(userType
										+ "/preference/category/delete/" + id, {
											headers : {
												'Authorization' : 'Bearer '
														+ $rootScope.authToken
											}
										});
							};
							
							// to update the career details for the given user
							dataFactory.udpateCareerDetails = function udpateCareerDetails(userType, updateCareerReq) {
								return $http.post(userType
										+ "/preference/career/details/update",
										updateCareerReq, {
											headers : {
												'Authorization' : 'Bearer '
														+ $rootScope.authToken
											}
										});
							};
							
							// to get the career details for the given user
							dataFactory.getUserCareerDetails = function getUserCareerDetails(userType) {
								return $http.get(userType
										+ "/preference/career/details", {
									headers : {
										'Authorization' : 'Bearer '
												+ $rootScope.authToken
									}
								});
							};
							
							// to update the user visibility for the given user
							// in the db
							dataFactory.updateUserVisibility = function updateUserVisibility(userType, isVisible) {
								return $http.put(userType
										+ "/visibility/change/" + isVisible, {}, {
											headers : {
												'Authorization' : 'Bearer '
														+ $rootScope.authToken
											}
										});
							};
							
							// to assign the given user to the speicied club
							dataFactory.assignUserToClub = function assignUserToClub(userType, clubId) {
								return $http.post(userType
										+ "/visibility/assign/" + clubId,
										{}, {
											headers : {
												'Authorization' : 'Bearer '
														+ $rootScope.authToken
											}
										});
							};
							
							// to remove the assignment of user to the club
							dataFactory.removalUserFromClub = function removalUserFromClub(userType, clubId) {
								return $http.post(userType
										+ "/visibility/unassign/" + clubId,
										{}, {
											headers : {
												'Authorization' : 'Bearer '
														+ $rootScope.authToken
											}
										});
							};
							
							// to get the subscription plans for the given type
							// of user
							dataFactory.getClubSubscriptionPlans = function getClubSubscriptionPlans(userType) {
								return $http.get("subscribe/plans/" + userType, {
									headers : {
										'Authorization' : 'Bearer '
												+ $rootScope.authToken
									}
								});
							};
							
							return dataFactory;

						} ]);