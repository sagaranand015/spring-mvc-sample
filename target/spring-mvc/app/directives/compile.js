angular.module('srApp').directive('compile', compile);

compile.$inject = [ '$compile' ];

function compile($compile) {

	console.log("In the compiler directive");

	return function(scope, element, attrs) {
		scope.$watch(function(scope) {
			return scope.$eval(attrs.compile);
		}, function(value) {
			element.html(value);
			$compile(element.contents())(scope);
		})
	};

};