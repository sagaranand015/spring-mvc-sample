<!DOCTYPE html>
<!--[if IE 8]>			<html class="ie ie8"> <![endif]-->
<!--[if IE 9]>			<html class="ie ie9"> <![endif]-->
<!--[if gt IE 9]><!-->
<html ng-app="srApp">
<!--<![endif]-->
<head>
<meta charset="utf-8" />
<title>Premier Recruits</title>
<meta name="description" content="" />

<!-- Favicon -->
<link rel="shortcut icon" href="resources/images/favicon.png"
	type="image/x-icon" />
<link rel="icon" href="resources/images/favicon.png" type="image/x-icon" />

<!-- mobile settings -->
<meta name="viewport"
	content="width=device-width, maximum-scale=1, initial-scale=1, user-scalable=0" />
<!--[if IE]><meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'><![endif]-->

<!-- WEB FONTS : use %7C instead of | (pipe) -->
<link
	href="https://fonts.googleapis.com/css?family=Open+Sans:300,400%7CRaleway:300,400,500,600,700%7CLato:300,400,400italic,600,700"
	rel="stylesheet" type="text/css" />

<!-- CORE CSS FOR BOOTSTRAP -->
<link href="resources/bootstrap/css/bootstrap.min.css" rel="stylesheet"
	type="text/css" />
<link href="resources/bootstrap/css/bootstrap-theme.min.css"
	rel="stylesheet" type="text/css" />

<!-- FONT-AWESOME CSS -->
<link href="resources/font-awesome/css/font-awesome.min.css"
	rel="stylesheet" type="text/css">

<!-- EXTERNAL ANGULAR CSS -->
<link rel="stylesheet"
	href="resources/font-awesome/css/font-awesome.min.css">
<link rel="stylesheet" href="libraries/ngToast/dist/ngToast.min.css">
<link rel="stylesheet"
	href="libraries/ngToast/dist/ngToast-animations.min.css">
<link rel="stylesheet" href="libraries/loadingbar/loading-bar.css">

<!-- for the angular toggle button CSS -->
<link
	href="libraries/angular-bootstrap-toggle/angular-bootstrap-toggle.min.css"
	rel="stylesheet">

<!-- THEME CSS -->
<link href="resources/smarty/css/essentials.css" rel="stylesheet"
	type="text/css" />
<link href="resources/smarty/css/layout.css" rel="stylesheet"
	type="text/css" />

<!-- REVOLUTION SLIDER -->
<link
	href="resources/smarty/plugins/slider.revolution/css/extralayers.css"
	rel="stylesheet" type="text/css" />
<link href="resources/smarty/plugins/slider.revolution/css/settings.css"
	rel="stylesheet" type="text/css" />

<!-- PAGE LEVEL SCRIPTS -->
<link href="resources/smarty/css/header-1.css" rel="stylesheet"
	type="text/css" />
<link href="resources/smarty/css/color_scheme/blue.css" rel="stylesheet"
	type="text/css" id="color_scheme" />

</head>

<body id="home" class="smoothscroll" ng-controller="mainController">

	<div ng-show="showDisabledScreen" class="load-overlay"></div>

	<toast></toast>

	<!-- wrapper -->
	<div ng-cloak id="wrapper">

		<div ng-include="'app/components/FE/navHeader/navHeader.jsp'"></div>

		<div ng-include="'app/components/FE/mainHeader/mainHeader.jsp'"></div>

		<div ng-include="'app/components/FE/headline/headline.jsp'"></div>

		<div ng-include="'app/components/FE/howitworks/howitworks.jsp'"></div>

		<!-- <div ng-include="'app/components/FE/testimonial/testimonial.jsp'"></div> -->

		<section class="padding-xxs">

			<!-- <div class="container">  -->

			<!-- Section Header -->
			<div class="row text-center black">
				<div class="col-md-10 col-md-offset-1">
					<h1 class="section-title">OUR TESTIMONIALS</h1>
				</div>
			</div>
			<!-- /Section Header -->

			<div class="owl-carousel text-center owl-testimonial nomargin"
				data-plugin-options='{"singleItem": true, "autoPlay": 3500, "navigation": false, "pagination": true, "transitionStyle":"fade"}'>

				<!-- <div class="testimonial">
            <div class="testimonial-content nopadding"> -->

				<div class="row text-center black">
					<div
						class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-12 testimonial-section">
						<div class="col-md-4 col-lg-4 col-sm-4">
							<img src="resources/images/testimonial-1.png"
								class="img-responsive testimonial-img">
						</div>
						<div class="col-md-8 col-lg-8 col-sm-8">
							<h3 class="testimonial-headline">
								"Premier Recruits provided a great service which allowed me to
								find a club within two weeks of signing up" <br /> Matthew
								Hogan - Robinvale Ruckman
							</h3>
						</div>
					</div>
				</div>

				<div class="row text-center black">
					<div
						class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-12 testimonial-section">
						<div class="col-md-4 col-lg-4 col-sm-4">
							<img src="resources/images/testimonial-2.png"
								class="img-responsive testimonial-img">
						</div>
						<div class="col-md-8 col-lg-8 col-sm-8">
							<h3 class="testimonial-headline">
								"Since signing up to Premier Recruits it's given our club a
								whole new avenue to potential prospects for the 2018 season" <br />
								Suresh Nair - President
							</h3>
						</div>
					</div>
				</div>

				<!-- <p class="lead blue-text">
                  I have been associated with the program first as a student, and then as a mentor. I must say this program helped me immensely, not only by exposing me to some of the key concepts of fundamental equity research, but also by helping me understand the career opportunities one could pursue in investment banking domain.
               </p> -->
				<!-- </div>
         </div> -->

			</div>
			<!-- </div> -->
		</section>

		<div ng-include="'app/components/FE/about/about.jsp'"></div>

		<div ng-include="'app/components/FE/contact/contact.jsp'"></div>

		<!-- <div ng-include="'app/components/FE/footer/footer.jsp'"></div>  -->

	</div>
	<!-- /wrapper -->

	<!-- SCROLL TO TOP -->
	<a href="#" id="toTop"></a>


	<!-- Angular dependency from CDN -->
	<script
		src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.6/angular.min.js"></script>
	<!-- jQuery dependecy from CDN -->
	<script
		src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/angular-sanitize/1.5.8/angular-sanitize.min.js"></script>
	<script src="app/appModule.js"></script>
	<script src="app/appConfig.js"></script>
	<script src="app/factories/dataFactory.js"></script>
	<script src="app/factories/httpInterceptor.js"></script>

	<!-- Angular Dependencies -->
	<script src="libraries/angular-ui-router/angular-ui-router.min.js"></script>
	<script src="libraries/angular/angular-sanitize.js"></script>
	<script src="libraries/ngToast/dist/ngToast.min.js"></script>
	<script src="libraries/angular-validator/angular-validator.min.js"></script>
	<script src="libraries/angular/angular-animate.js"></script>
	<script src="libraries/loadingbar/loading-bar.js"></script>
	<script src="libraries/angular-ui/ui-bootstrap-2.1.3.min.js"></script>
	<script src="libraries/angular-ui/ui-bootstrap-tpls-2.1.3.min.js"></script>
	<script src="libraries/angular-scroll/angular-scroll.min.js"></script>
	<script src="libraries/angular-trix/angular-trix.js"></script>
	<script src="libraries/angular-cookies/angular-cookies.min.js"></script>
	<script
		src="libraries/angular-bootstrap-toggle/angular-bootstrap-toggle.min.js"></script>
	<script
		src="libraries/dropdown-multiselect/angularjs-dropdown-multiselect.js"></script>
	<script src="libraries/angular-credit-cards/angular-credit-cards.js"></script>

	<!-- Js Dependencies -->
	<script src="resources/bootstrap/js/bootstrap.min.js"></script>

	<!-- For all the custom controllers -->
	<script src="app/pages/index/controller/mainController.js"></script>
	<script src="app/components/FE/navHeader/navHeaderController.js"></script>
	<script src="app/components/FE/mainHeader/mainHeaderController.js"></script>
	<script src="app/components/FE/footer/footerController.js"></script>
	<script src="app/components/FE/about/aboutController.js"></script>
	<script src="app/components/FE/headline/headlineController.js"></script>
	<script src="app/components/FE/howitworks/howitworksController.js"></script>
	<script src="app/components/FE/testimonial/testimonialController.js"></script>
	<script src="app/components/FE/contact/contactController.js"></script>

	<!-- the modal dependencies -->
	<script src="app/modals/contentModal/contentModalController.js"></script>

	<script type="text/javascript">
		var con = '';
	</script>

	<!-- for the Smarty theme -->
	<script type="text/javascript">
		var plugin_path = 'resources/smarty/plugins/';
	</script>
	<script type="text/javascript"
		src="resources/smarty/plugins/jquery/jquery-2.1.4.min.js"></script>
	<script type="text/javascript" src="resources/smarty/js/scripts.js"></script>

	<!-- REVOLUTION SLIDER -->
	<script type="text/javascript"
		src="resources/smarty/plugins/slider.revolution/js/jquery.themepunch.tools.min.js"></script>
	<script type="text/javascript"
		src="resources/smarty/plugins/slider.revolution/js/jquery.themepunch.revolution.min.js"></script>

</body>
</html>