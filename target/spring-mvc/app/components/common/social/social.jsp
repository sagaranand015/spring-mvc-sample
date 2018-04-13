
<!-- Content Header (Page header) -->
<section class="content-header">
	<h1 ng-bind-html="dashboardHeading">
		{{dashboardHeading}} <small ng-bind-html="dashboardSubHeading">{{dashboardSubHeading}}</small>
	</h1>
</section>

<section class="content">
	<div class="row">

		<div class="col-md-12">
			<div class="box box-danger">
				<div class="box-header with-border">
					<h3 class="box-title text-center">Add Social Media Links</h3>
				</div>
				<div class="box-body">
					
				</div>
			</div>
		</div>

		<!-- for the internal blade view -->
		<div ui-view="blade_component_ui"></div>

	</div>
</section>
