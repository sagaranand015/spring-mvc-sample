/**
 * Routing for the complete web app
 */
angular
		.module('srApp')
		.config(
				[
						'$stateProvider',
						'$urlRouterProvider',
						'$httpProvider',
						'cfpLoadingBarProvider',
						'ngToastProvider',
						function($stateProvider, $urlRouterProvider,
								$httpProvider, cfpLoadingBarProvider, ngToastProvider, ) {

							// for registering the http interceptor
							 $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
							 $httpProvider.interceptors.push('httpInterceptor');

							// for the loading spinner
							cfpLoadingBarProvider.includeSpinner = true;

							// for the ngToast configuration
							ngToastProvider.configure({
								animation : 'slide'
							});

							// application routes for all the modules and login
							// requiring pages
							$stateProvider
									.state(
											'adminDashboard',
											{
												url : '/admin/dashboard',
												views : {
													'blade_ui' : {
														templateUrl : 'app/components/admin/dashboard/adminDashboard.jsp',
														controller : 'adminDashboardController'
													}
												}
											})
									.state(
											'playerProfile',
											{
												url : '/player/profile',
												views : {
													'blade_ui' : {
														templateUrl : 'app/components/player/pages/profile/profile.jsp',
														controller : 'profileController'
													}
												}
											})
									.state(
											'coachDashboard',
											{
												url : '/coach/dashboard',
												views : {
													'blade_ui' : {
														templateUrl : 'app/components/coach/dashboard/coachDashboard.jsp',
														controller : 'coachDashboardController'
													}
												}
											})
									.state(
											'clubDashboard',
											{
												url : '/club/dashboard',
												views : {
													'blade_ui' : {
														templateUrl : 'app/components/club/dashboard/clubDashboard.jsp',
														controller : 'clubDashboardController'
													}
												}
											})
									.state(
											'clubCoaches',
											{
												url : '/club/coaches',
												views : {
													'blade_ui' : {
														templateUrl : 'app/components/club/coaches/clubCoaches.jsp',
														controller : 'clubCoachesController'
													}
												}
											})
									.state(
											'clubPlayers',
											{
												url : '/club/players',
												views : {
													'blade_ui' : {
														templateUrl : 'app/components/club/players/clubPlayers.jsp',
														controller : 'clubPlayersController'
													}
												}
											})
									.state(
											'clubProfile',
											{
												url : '/club/profile',
												views : {
													'blade_ui' : {
														templateUrl : 'app/components/club/profile/clubProfile.jsp',
														controller : 'clubProfileController'
													}
												}
											})
									.state(
											'clubDetails',
											{
												url : '/club/details',
												views : {
													'blade_ui' : {
														templateUrl : 'app/components/club/details/clubDetails.jsp',
														controller : 'clubDetailsController'
													}
												}
											})
									.state(
											'clubFunctions',
											{
												url : '/club/functions',
												views : {
													'blade_ui' : {
														templateUrl : 'app/components/club/functions/clubFunctions.jsp',
														controller : 'clubFunctionsController'
													}
												}
											})
									.state(
											'clubSocial',
											{
												url : '/club/social',
												views : {
													'blade_ui' : {
														templateUrl : 'app/components/common/social/social.jsp',
														controller : 'socialController'
													}
												}
											})
									.state(
											'timeline',
											{
												url : '/timeline',
												views : {
													'blade_ui' : {
														templateUrl : 'app/components/portal/timeline/timeline.jsp',
														controller : 'timelineController'
													}
												},
												params : {
													origin : null,
													entityId : null
												}
											});

						} ]);






// unused states, might be used in future
// .state(
// 'playerDashboard',
// {
// url : '/player/dashboard',
// views : {
// 'blade_ui' : {
// templateUrl : 'app/components/player/dashboard/playerDashboard.jsp',
// controller : 'playerDashboardController'
// }
// },
// params : {
// reload : true
// }
// })
// .state(
// 'playerClubListing',
// {
// url : '/player/listing/club',
// views : {
// 'blade_ui' : {
// templateUrl : 'app/components/player/clubListing/clubListing.jsp',
// controller : 'clubListingController'
// }
// },
// params : {
// reload : true
// }
// })
// .state(
// 'playerPreference',
// {
// url : '/player/preference',
// views : {
// 'blade_ui' : {
// templateUrl : 'app/components/player/preference/preference.jsp',
// controller : 'preferenceController'
// }
// }
// })
// .state(
// 'playerPlayingPreference',
// {
// url : '/player/settings',
// views : {
// 'blade_ui' : {
// templateUrl :
// 'app/components/player/playingPreference/playingPreference.jsp',
// controller : 'playingPreferenceController'
// }
// }
// })
// .state(
// 'playerSocial',
// {
// url : '/player/social',
// views : {
// 'blade_ui' : {
// templateUrl : 'app/components/common/social/social.jsp',
// controller : 'socialController'
// }
// }
// })
// .state(
// 'playerCareer',
// {
// url : '/player/career',
// views : {
// 'blade_ui' : {
// templateUrl : 'app/components/player/career/playerCareer.jsp',
// controller : 'playerCareerController'
// }
// }
// })
