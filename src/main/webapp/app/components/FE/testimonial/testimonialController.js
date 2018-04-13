angular.module('srApp').controller('testimonialController', testimonialController);

testimonialController.$inject = [ '$scope', '$rootScope', '$document', '$uibModal', 'dataFactory', 'ngToast' ];

function testimonialController($scope, $rootScope, $document, $uibModal, dataFactory, ngToast) {
	var vm = this;

	vm.initTestimonial = function initTestimonial() {
		console.log("logging testimonialController");
	};	

	vm.initTestimonial();

};
