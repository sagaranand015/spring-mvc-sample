
<section class="aboutus white-background black" id="headline"
	ng-controller="subscriptionController" ng-if="subscription.enabled">
	<div class="container">

		<div class="row" ng-repeat="plan in plansData">
			<div
				class="col-lg-10 col-lg-offset-1 col-md-10 col-sm-offset-1 col-sm-10 col-sm-offset-1 col-xs-12">
				<div class="box-icon box-icon-left box-icon-round box-subscription">
					<a class="box-icon-title" href="#">
						<h1 class="page-header section-title">{{plan.name}}</h1>
					</a>
					<p class="subscription-box-content">
						{{plan.metadata.description}}</p>
					<!-- <a class="box-icon-more font-lato weight-300" href="#">Learn More</a> -->
					<button class="btn btn-lg btn-primary pull-right"
						ng-click="openPaymentModal(plan.id)">Subscribe</button>
					<input type="hidden" name="planId"
					id="planId" ng-value="plan.id" />
				</div>
			</div>
		</div>

		<!-- <div class="row">
			<div
				class="col-lg-10 col-lg-offset-1 col-md-10 col-sm-offset-1 col-sm-10 col-sm-offset-1 col-xs-12">
				<div class="box-icon box-icon-left box-icon-round box-subscription">
					<a class="box-icon-title" href="#">
						<h1 class="page-header section-title">Free Monthly Plan</h1>
					</a>
					<p class="subscription-box-content">
						This is the free monthly plan. No need for the payment here. This
						is the free monthly plan. No need for the payment here. This is
						the free monthly plan. No need for the payment here. This is the
						free monthly plan. No need for the payment here. <br /> This is
						the free monthly plan. No need for the payment here.
					</p>
					<a class="box-icon-more font-lato weight-300" href="#">Learn More</a>
					<button class="btn btn-lg btn-primary pull-right"
						ng-click="openPaymentModal('club_01')">Subscribe</button>
				</div>
			</div>
		</div>

		<div class="row">
			<div
				class="col-lg-10 col-lg-offset-1 col-md-10 col-sm-offset-1 col-sm-10 col-sm-offset-1 col-xs-12">
				<div class="box-icon box-icon-left box-icon-round box-subscription">
					<a class="box-icon-title" href="#">
						<h1 class="page-header section-title">$2 Daily Plan</h1>
					</a>
					<p class="subscription-box-content">
						This is the $2 Daily Subscription Plan for testing purposes.
						Subscribe to this and make the payment using a test card.
						Subscription Plan for testing purposes. Subscribe to this and make
						the payment using a test card. Subscription Plan for testing
						purposes. Subscribe to this and make the payment using a test card
						<br /> Subscription Plan for testing purposes. Subscribe to this
						and make the payment using a test card. Subscription Plan for
						testing purposes. Subscribe to this and make the payment using a
						test card
					</p>
					<a class="box-icon-more font-lato weight-300" href="#">Learn More</a>
					<button class="btn btn-lg btn-primary pull-right"
						ng-click="openPaymentModal('')">Subscribe</button>
				</div>
			</div>
		</div> -->

	</div>
	<!-- ./container -->
</section>