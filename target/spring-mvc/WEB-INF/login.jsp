<%@ taglib prefix="sec"
	uri="http://www.springframework.org/security/tags"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
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
<link rel="shortcut icon"
	href="<c:out value="${pageContext.request.contextPath}/resources/images/favicon.png" />"
	type="image/x-icon" />

<link rel="icon"
	href="<c:out value="${pageContext.request.contextPath}/resources/images/favicon.png" />"
	type="image/x-icon" />

<!-- mobile settings -->
<meta name="viewport"
	content="width=device-width, maximum-scale=1, initial-scale=1, user-scalable=0" />
<!--[if IE]><meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1'><![endif]-->

<!-- WEB FONTS : use %7C instead of | (pipe) -->
<link
	href="https://fonts.googleapis.com/css?family=Open+Sans:300,400%7CRaleway:300,400,500,600,700%7CLato:300,400,400italic,600,700"
	rel="stylesheet" type="text/css" />

<!-- CORE CSS FOR BOOTSTRAP -->
<link
	href="<c:out value="${pageContext.request.contextPath}/resources/bootstrap/css/bootstrap.min.css" />"
	rel="stylesheet" type="text/css" />
<link
	href="<c:out value="${pageContext.request.contextPath}/resources/bootstrap/css/bootstrap-theme.min.css" />"
	rel="stylesheet" type="text/css" />

<!-- FONT-AWESOME CSS -->
<link
	href="<c:out value="${pageContext.request.contextPath}/resources/font-awesome/css/font-awesome.min.css" />"
	rel="stylesheet" type="text/css" />

<!-- EXTERNAL ANGULAR CSS -->
<link
	href="<c:out value="${pageContext.request.contextPath}/resources/font-awesome/css/font-awesome.min.css" />"
	rel="stylesheet" />

<link
	href="<c:out value="${pageContext.request.contextPath}/libraries/ngToast/dist/ngToast.min.css" />"
	rel="stylesheet" />

<link
	href="<c:out value="${pageContext.request.contextPath}/libraries/ngToast/dist/ngToast-animations.min.css" />"
	rel="stylesheet" />

<link
	href="<c:out value="${pageContext.request.contextPath}/libraries/loadingbar/loading-bar.css" />"
	rel="stylesheet" />

<!-- for the angular toggle button CSS -->
<link
	href="<c:out value="${pageContext.request.contextPath}/libraries/angular-bootstrap-toggle/angular-bootstrap-toggle.min.css" />"
	rel="stylesheet" />

<!-- THEME CSS -->
<link
	href="<c:out value="${pageContext.request.contextPath}/resources/smarty/css/essentials.css" />"
	rel="stylesheet" type="text/css" />

<link
	href="<c:out value="${pageContext.request.contextPath}/resources/smarty/css/layout.css" />"
	rel="stylesheet" type="text/css" />

<!-- REVOLUTION SLIDER -->
<link
	href="<c:out value="${pageContext.request.contextPath}/resources/smarty/plugins/slider.revolution/css/extralayers.css" />"
	rel="stylesheet" type="text/css" />
<link
	href="<c:out value="${pageContext.request.contextPath}/resources/smarty/plugins/slider.revolution/css/settings.css" />"
	rel="stylesheet" type="text/css" />

<!-- PAGE LEVEL SCRIPTS -->
<link
	href="<c:out value="${pageContext.request.contextPath}/resources/smarty/css/header-1.css" />"
	rel="stylesheet" type="text/css" />
<link
	href="<c:out value="${pageContext.request.contextPath}/resources/smarty/css/color_scheme/blue.css" />"
	rel="stylesheet" type="text/css" id="color_scheme" />

</head>

<body id="home" class="smoothscroll" ng-controller="loginController">

	<div ng-show="showDisabledScreen" class="load-overlay"></div>

	<toast></toast>

	<!-- wrapper -->
	<div ng-cloak id="wrapper">

		<div
			ng-include="'${pageContext.request.contextPath}/app/components/FE/navHeader/navHeader.jsp'"></div>

		<section id="login" ng-if="login.enabled" class="form-login">

			<div class="container">

				<div class="row text-center">
					<div
						class="col-lg-10 col-lg-offset-1 col-md-10 col-md-offset-1 col-sm-12 col-xs-12">

						<form id="form-login"
							action="${pageContext.request.contextPath}/login" method="POST"
							name="form">

							<div
								class="col-lg-8 col-lg-offset-2 col-md-8 col-lg-offset-2 col-sm-10 col-sm-offset-1 col-xs-12">

								<h2 class="page-header text-center section-title">${loginFor}</h2>

								<c:if test="${valid eq false}">
									<div class="alert alert-danger">
										<strong> Invalid User ID or Password </strong>
									</div>
								</c:if>

								<c:if test="${logout eq true}">
									<div class="alert alert-success">
										<strong> Logged Out Successfully </strong>
									</div>
								</c:if>

								<c:if test="${session eq false}">
									<div class="alert alert-danger">
										<strong> Your Session Expired or invalid login
											attempts were made. Please login again </strong>
									</div>
								</c:if>

								<c:if test="${status eq false}">
									<div class="alert alert-danger">
										<strong> Internal Server Error Occured while
											processing your Request. Please try again or contact <code>info@premierrecruits.com.au</code>
										</strong>
									</div>
								</c:if>

								<c:if test="${approved eq false}">
									<div class="alert alert-danger">
										<strong> Your Account is not approved. You can
											attempt approval by requesting the <a href
											ng-click="sendAccountConfirmMail('${userType}')">Approval
												Email</a> again
										</strong>
									</div>
								</c:if>

								<c:if test="${access eq false}">
									<div class="alert alert-warning">
										<strong>Oopsie! You tried to access something without
											proper authentication. Please try again </strong>
									</div>
								</c:if>

								<c:if test="${password eq true}">
									<div class="alert alert-success">
										<strong> Password was successfully changed. Please
											login below with the new password </strong>
									</div>
								</c:if>
								<c:if test="${password eq false}">
									<div class="alert alert-warning">
										<strong> The Passwords Entered were incorrect or
											something was tampered with. Please try using the Forgot
											Password feature again </strong>
									</div>
								</c:if>

								<!-- For the success case of register -->
								<c:if test="${register eq true}">
									<div class="alert alert-success">
										<strong> Your Registration is Successful. Please
											confirm your Email by clicking on the Confirmation Link sent
											in your Registered Email to Access your PR Account </strong>
									</div>
								</c:if>
								<c:if test="${register eq false}">
									<div class="alert alert-danger">
										<strong> We could not find any such Email Address.
											Please <a href='register'>Register</a> first
										</strong>
									</div>
								</c:if>


								<c:choose>
									<c:when test="${confirm eq 1}">
										<div class="alert alert-success">
											<strong> Your Email Address is successfully
												confirmed. Please login below to access your M-R Account </strong>
										</div>
									</c:when>
									<c:when test="${confirm eq 0}">
										<div class="alert alert-warning">
											<strong> We could not confirm your Email Address.
												Please try again with the link sent to your Registered Email
											</strong>
										</div>
									</c:when>
									<c:when test="${confirm eq -1}">
										<div class="alert alert-warning">
											<strong> Internal Server Error Occured while
												processing your Request. Please try again or contact <code>info@premierrecruits.com.au</code>
											</strong>
										</div>
									</c:when>
								</c:choose>

								<c:if test="${subscribe eq true}">
									<div class="alert alert-success">
										<strong> You have been successfully subscribed.
											Please login below to access your dashboard. </strong>
									</div>
								</c:if>
								<c:if test="${subscribe eq false}">
									<div class="alert alert-danger">
										<strong> You could not be subscribed for the chosen
											plan. Please login again below to attempt the subscription
											again. </strong>
									</div>
								</c:if>

								<table class="table">
									<tr>
										<td><input type="email" class="form-control"
											id="txt-email" name="txtEmail"
											placeholder="Enter your Email*" ng-model="txtEmail" required />
											<span id="val_err"
											ng-show="form.txtEmail.$touched && form.txtEmail.$invalid ">Email
												Is Invalid</span></td>
									</tr>
									<tr>
										<td><input type="password" class="form-control"
											id="txt-password" name="txtPassword"
											placeholder="Enter your Password*" ng-model="txtPassword"
											required pattern="^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*[0-9]).*$" />
											<span id="val_err"
											ng-show="form.txtPassword.$touched && form.txtPassword.$invalid ">6
												or more chatacters, should contain letters and atleast a
												number</span></td>
									</tr>
									<tr>
										<td><a href ng-click="showForgotPasswordModal()"
											class="pull-left link-white">Forgot Password?</a></td>
									</tr>
									<tr>
										<td><sec:csrfInput /> <input type="hidden"
											name="userType" value="${userType}" /> <input type="submit"
											class="btn btn-lg btn-primary btn-block" value="Login"
											id="btn-submit" name="btn-submit"
											ng-disabled="form.txtEmail.$invalid || form.txtPassword.$invalid" /></td>
									</tr>
								</table>
							</div>

						</form>


					</div>
					<!-- /row -->
				</div>
				<!-- /row -->

			</div>

		</section>

		<div
			ng-include="'${pageContext.request.contextPath}/app/components/FE/footer/footer.jsp'"></div>

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

	<script type="text/javascript">
		var con = "${pageContext.request.contextPath}";
		var plugin_path = con + '/resources/smarty/plugins/';
	</script>

	<script
		src="<c:out value="${pageContext.request.contextPath}/app/appModule.js" />"></script>

	<script
		src="<c:out value="${pageContext.request.contextPath}/app/appConfig.js" />"></script>

	<script
		src="<c:out value="${pageContext.request.contextPath}/app/factories/dataFactory.js" />"></script>

	<script
		src="<c:out value="${pageContext.request.contextPath}/app/factories/httpInterceptor.js" />"></script>

	<!-- Angular Dependencies -->
	<script
		src="<c:out value="${pageContext.request.contextPath}/libraries/angular-ui-router/angular-ui-router.min.js" />"></script>
	<script
		src="<c:out value="${pageContext.request.contextPath}/libraries/angular/angular-sanitize.js" />"></script>
	<script
		src="<c:out value="${pageContext.request.contextPath}/libraries/ngToast/dist/ngToast.min.js" />"></script>
	<script
		src="<c:out value="${pageContext.request.contextPath}/libraries/angular-validator/angular-validator.min.js" />"></script>
	<script
		src="<c:out value="${pageContext.request.contextPath}/libraries/angular/angular-animate.js" />"></script>
	<script
		src="<c:out value="${pageContext.request.contextPath}/libraries/loadingbar/loading-bar.js" />"></script>
	<script
		src="<c:out value="${pageContext.request.contextPath}/libraries/angular-ui/ui-bootstrap-2.1.3.min.js" />"></script>
	<script
		src="<c:out value="${pageContext.request.contextPath}/libraries/angular-ui/ui-bootstrap-tpls-2.1.3.min.js" />"></script>
	<script
		src="<c:out value="${pageContext.request.contextPath}/libraries/angular-scroll/angular-scroll.min.js" />"></script>
	<script
		src="<c:out value="${pageContext.request.contextPath}/libraries/angular-trix/angular-trix.js" />"></script>
	<script
		src="<c:out value="${pageContext.request.contextPath}/libraries/angular-cookies/angular-cookies.min.js" />"></script>
	<script
		src="<c:out value="${pageContext.request.contextPath}/libraries/angular-bootstrap-toggle/angular-bootstrap-toggle.min.js" />"></script>
	<script
		src="<c:out value="${pageContext.request.contextPath}/libraries/dropdown-multiselect/angularjs-dropdown-multiselect.js" />"></script>
	<script
		src="<c:out value="${pageContext.request.contextPath}/libraries/angular-credit-cards/angular-credit-cards.js" />"></script>

	<!-- Js Dependencies -->
	<script
		src="<c:out value="${pageContext.request.contextPath}/resources/bootstrap/js/bootstrap.min.js" />"></script>

	<!-- For all the custom controllers -->
	<script
		src="<c:out value="${pageContext.request.contextPath}/app/pages/login/controller/loginController.js" />"></script>
	<script
		src="<c:out value="${pageContext.request.contextPath}/app/components/FE/navHeader/navHeaderController.js" />"></script>
	<script
		src="<c:out value="${pageContext.request.contextPath}/app/components/FE/footer/footerController.js" />"></script>

	<!-- the modal dependencies -->
	<script
		src="<c:out value="${pageContext.request.contextPath}/app/modals/inputModal/inputModalController.js" />"></script>
	<script
		src="<c:out value="${pageContext.request.contextPath}/app/modals/contentModal/contentModalController.js" />"></script>

	<!-- for the Smarty theme -->
	<script type="text/javascript"
		src="<c:out value="${pageContext.request.contextPath}/resources/smarty/plugins/jquery/jquery-2.1.4.min.js" />"></script>
	<script type="text/javascript"
		src="<c:out value="${pageContext.request.contextPath}/resources/smarty/js/scripts.js" />"></script>

	<!-- REVOLUTION SLIDER -->
	<script type="text/javascript"
		src="<c:out value="${pageContext.request.contextPath}/resources/smarty/plugins/slider.revolution/js/jquery.themepunch.tools.min.js" />"></script>
	<script type="text/javascript"
		src="<c:out value="${pageContext.request.contextPath}/resources/smarty/plugins/slider.revolution/js/jquery.themepunch.revolution.min.js" />"></script>
</body>
</html>