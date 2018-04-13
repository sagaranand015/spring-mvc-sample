<div id="header" class="sticky clearfix"
	ng-controller="navHeaderController">

	<!-- for the alert thing for all the pages -->
	<div class="alert alert-success alert-dismissible"
		ng-if="headerAlert.success.enabled">
		<button ng-if="headerAlert.success.enableCloseButton" type="button"
			class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
		<span ng-bind-html="headerAlert.success.content">{{headerAlert.success.content}}</span>
	</div>
	<div class="alert alert-info alert-dismissible"
		ng-if="headerAlert.info.enabled">
		<button ng-if="headerAlert.info.enableCloseButton" type="button"
			class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
		<span ng-bind-html="headerAlert.info.content">{{headerAlert.info.content}}</span>
	</div>
	<div class="alert alert-warning alert-dismissible"
		ng-if="headerAlert.warning.enabled">
		<button ng-if="headerAlert.warning.enableCloseButton" type="button"
			class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
		<span ng-bind-html="headerAlert.warning.content">{{headerAlert.warning.content}}</span>
	</div>
	<div class="alert alert-danger alert-dismissible"
		ng-if="headerAlert.danger.enabled">
		<button ng-if="headerAlert.danger.enableCloseButton" type="button"
			class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
		<span ng-bind-html="headerAlert.danger.content">{{headerAlert.danger.content}}</span>
	</div>

	<!-- TOP NAV -->
	<header id="topNav">
		<div class="container">

			<!-- Mobile Menu Button -->
			<button class="btn btn-mobile" data-toggle="collapse"
				data-target=".nav-main-collapse">
				<i class="fa fa-bars"></i>
			</button>

			<!-- Logo -->
			<a id="logo-image" style="display: block;" class="logo pull-left"
				ng-href="${pageContext.request.contextPath}/{{navHeader.logo.link}}">
				<img
				ng-src="${pageContext.request.contextPath}/{{navHeader.logo.image}}"
				alt="{{navHeader.logo.alt}}" />
			</a> <a id="logo-text-image" style="display: none;"
				class="logo pull-left"
				ng-href="${pageContext.request.contextPath}/{{navHeader.text.link}}">
				<img style="width: 50%; height: 50%;"
				ng-src="${pageContext.request.contextPath}/{{navHeader.text.image}}"
				alt="{{navHeader.text.alt}}" />
			</a>

			<div
				class="navbar-collapse pull-right nav-main-collapse collapse submenu-dark">
				<nav class="nav-main">

					<ul id="topMain" class="nav nav-pills nav-main">

						<li ng-repeat="menuItem in navHeader.menu"><a
							ng-click="scroll(menuItem.scrollLink)"
							ng-href="${pageContext.request.contextPath}/{{menuItem.link}}"
							ng-bind-html="menuItem.text">{{menuItem.text}}</a>
							<ul class="dropdown-menu" ng-if="menuItem.submenu.enabled">
								<li ng-repeat="item in menuItem.submenu.list"><a
									ng-click="scroll(item.scrollLink)"
									ng-href="${pageContext.request.contextPath}/{{item.link}}">{{item.text}}</a>
								</li>
							</ul></li>

						<li ng-repeat="menuItem in pageMenu.menu" ng-if="menuItem.enabled">
							<a ng-click="scroll(menuItem.scrollLink)"
							ng-href="${pageContext.request.contextPath}/{{menuItem.link}}"
							ng-bind-html="menuItem.text">{{menuItem.text}}</a>
							<ul class="dropdown-menu" ng-if="menuItem.submenu.enabled">
								<li ng-repeat="item in menuItem.submenu.list"><a
									ng-click="scroll(item.scrollLink)"
									ng-href="${pageContext.request.contextPath}/{{item.link}}">{{item.text}}</a>
								</li>
							</ul>
						</li>

						<li ng-repeat="menuItem in pageMenu.social"><a
							class="navbar-icon" ng-href="{{menuItem.link}}" target="_blank">
								<i ng-class="menuItem.class" aria-hidden="true"></i>
						</a></li>

					</ul>

				</nav>
			</div>
		</div>
	</header>
	<!-- /Top Nav -->

</div>
<!-- /header div -->