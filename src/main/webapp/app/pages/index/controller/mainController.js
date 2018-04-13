angular.module('srApp').controller('mainController', mainController);

mainController.$inject = ['$scope', '$rootScope', 'dataFactory', 'ngToast', '$uibModal', '$document' ];

function mainController($scope, $rootScope, dataFactory, ngToast, $uibModal, $document) {
	console.log("logging mainController");
	var vm = this;

	$rootScope.pageMenu = {};

	$rootScope.showDisabledScreen = true;
	// On starting of the loading bar during any AJAX request
	$rootScope.$on('cfpLoadingBar:started', function(event, data) {
		$rootScope.showDisabledScreen = true;
	});
	// on ending of the loading bar during any AJAX request
	$rootScope.$on('cfpLoadingBar:completed', function(event, data) {
		$rootScope.showDisabledScreen = false;
	});

	vm.init = function init() {

		console.log("Init function in MainController");
		
		vm.navHeaderContent = dataFactory.getPageContents("pages/common/content/navHeaderContent").then(function(response) {
			$rootScope.navHeader = response.data.navHeader;
			vm.footerContent = dataFactory.getPageContents("pages/common/content/footerContent").then(function(response) { 
				$rootScope.footer = response.data.footer;
				vm.indexContent = dataFactory.getPageContents("pages/index/content/indexContent").then(function(response) {
					$rootScope.pageMenu = response.data.headerMenu;
					$rootScope.mainHeader = response.data.mainHeader;
					$rootScope.about = response.data.about;
					$rootScope.headline = response.data.headline;
					$rootScope.howitworks = response.data.howitworks;
					$rootScope.contact = response.data.contact;
				}, function(response) {
					ngToast.create({
						className: 'danger',
						content: 'Content could not be loaded. Please try again'
					});	
				});
			}, function(response) {
				ngToast.create({
					className: 'danger',
					content: 'Content could not be loaded. Please try again'
				});
			});
		}, function(response) {
			ngToast.create({
				className: 'danger',
				content: 'Content could not be loaded. Please try again'
			});
		});

	};

	$rootScope.$on('$includeContentLoaded', function(evt, templateName) {
		console.log("Loaded!" + templateName);

		if(templateName == 'app/components/FE/mainHeader/mainHeader.jsp') {
			var revapi;
			jQuery(".fullwidthbanner ul , .fullscreenbanner ul").removeClass('hide');
			if(jQuery(".fullwidthbanner").length > 0) {
				var thumbWidth 			= 100,
					thumbHeight 		= 50,
					hideThumbs			= 200,
					navigationType		= "bullet",
					navigationArrows	= "solo",
					navigationVOffset	= 10;
				_shadow = jQuery(".fullwidthbanner").attr('data-shadow') || 0;
				if(jQuery(".fullwidthbanner").hasClass('thumb-small')) {
					var navigationType 		= "thumb";
				}
				if(jQuery(".fullwidthbanner").hasClass('thumb-large')) {
					var navigationType 		= "thumb";
						thumbWidth 			= 195,
						thumbHeight 		= 95,
						hideThumbs			= 0,
						navigationArrows	= "solo",
						navigationVOffset	= -94;
				}
				revapi = jQuery('.fullwidthbanner').revolution({
					dottedOverlay:"none",
					delay:9000,
					startwidth:1170,
					startheight: jQuery(".fullwidthbanner").attr('data-height') || 600,
					hideThumbs:hideThumbs,

					thumbWidth:thumbWidth,
					thumbHeight:thumbHeight,
					thumbAmount: parseInt(jQuery(".fullwidthbanner ul li").length) || 2,

					navigationType:navigationType,
					navigationArrows:navigationArrows,
					navigationStyle:jQuery('.fullwidthbanner').attr('data-navigationStyle') || "round", // round,square,navbar,round-old,square-old,navbar-old (see docu - choose between 50+ different item)

					touchenabled:"on",
					onHoverStop:"on",

					navigationHAlign:"center",
					navigationVAlign:"bottom",
					navigationHOffset:0,
					navigationVOffset:navigationVOffset,

					soloArrowLeftHalign:"left",
					soloArrowLeftValign:"center",
					soloArrowLeftHOffset:20,
					soloArrowLeftVOffset:0,

					soloArrowRightHalign:"right",
					soloArrowRightValign:"center",
					soloArrowRightHOffset:20,
					soloArrowRightVOffset:0,

					parallax:"mouse",
					parallaxBgFreeze:"on",
					parallaxLevels:[7,4,3,2,5,4,3,2,1,0],

					shadow: parseInt(_shadow),
					fullWidth:"on",
					fullScreen:"off",

					stopLoop:"off",
					stopAfterLoops:-1,
					stopAtSlide:-1,

					spinner:"spinner0",
					shuffle:"off",

					autoHeight:"off",
					forceFullWidth:"off",

					hideThumbsOnMobile:"off",
					hideBulletsOnMobile:"on",
					hideArrowsOnMobile:"on",
					hideThumbsUnderResolution:0,

					hideSliderAtLimit:0,
					hideCaptionAtLimit:768,
					hideAllCaptionAtLilmit:0,
					startWithSlide:0,
					fullScreenOffsetContainer: ""
				});
				// Used by styleswitcher onle - delete this on production!
				jQuery("#is_wide, #is_boxed").bind("click", function() { revapi.revredraw(); });
			}
		}   // end of template name if

	});

	// for the scrolling on the same page
	$rootScope.scroll = function scroll(section) {
		$rootScope.currentSection = section;
		if ($rootScope.currentSection != null
				|| $rootScope.currentSection != undefined
				|| $rootScope.currentSectioncurrentSection != "") {
			$rootScope.currentSection = angular.element(document
					.getElementById(section));
		}
		var selectedsection = $rootScope.currentSection;
		if (selectedsection == undefined || selectedsection == null
				|| selectedsection.length == 0 || selectedsection == "") {
		} else {
			$document.scrollToElement(selectedsection, 50, 500);
		}
	};

	
	vm.init();

}