angular
		.module('srApp')
		.factory(
				'httpInterceptor',
				[
						'$q',
						'$window',
						'$rootScope',
						'ngToast',
						function($q, $window, $rootScope, ngToast) {

							return {

								'request' : function(config) {
									config.headers = config.headers || {};
									// Handle something else
									return config;
								},

								// // Optional method
								// 'requestError': function(rejection) {
								// console.log("Inside the request
								// httpInterceptor Error promise");
								// console.log(rejection);
								//	        	
								// // do something on request error
								// // if (canRecover(rejection)) {
								// // return responseOrNewPromise
								// // }
								// // return $q.reject(rejection);
								// },

								// Optional method
								'response' : function(response) {
									if (typeof response.data == 'string') {
										if (response.data
												.indexOf("loginController") > -1) {
											$rootScope.showDisabledScreen = true;
											ngToast
													.create({
														className : 'danger',
														content : "Your Session Expired. Redirecting to the <a href='login'>Login Page</a> ",
														dismissOnClick : false,
														dismissOnTimeout : false
													});
											$window.location.href = "login?session=false";
										}
									}
									return response;
								},

								// optional method
								'responseError' : function(rejection) {
									// Here you can do something in response
									// error, like handle errors, present error
									// messages etc.
									if (rejection.status === 401) { // Unauthorized
										ngToast
												.create({
													className : 'danger',
													content : "Your Session Expired. Redirecting to the <a href='login'>Login Page</a> ",
													dismissOnClick : false,
													dismissOnTimeout : false
												});
										$window.location.href = "login?session=false";
									} else if (rejection.status === 403) { // Unauthorized
										ngToast
												.create({
													className : 'danger',
													content : "Your Session Expired. Redirecting to the <a href='login'>Login Page</a> ",
													dismissOnClick : false,
													dismissOnTimeout : false
												});
										$window.location.href = "login?session=false";
									}

									else { // Wrong input and 400 response
										return $q.reject(rejection);
									}

									// if (canRecover(rejection)) {
									// return responseOrNewPromise
									// }
									// return $q.reject(rejection);
								}

							};

						} ]);