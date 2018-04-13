
<div class="modal-dialog">
	<div class="modal-content">
		<div class="modal-header">
			<h3 class="modal-title text-center" id="modal-title">{{data.headline}}</h3>
		</div>

		<!--  the add form first -->
		<div ng-if="data.type == 'add'">
			<form name="formAddCategory">
				<div class="modal-body" id="modal-body">
					<h4>{{data.body}}</h4>

					<div class="form-group">
						<label for="playerPosition">Playing Category*</label> 

						<!-- <input
							id="playerCategory" type="text" class="form-control"
							name="playerCategory" ng-model="$parent.playerCategory"
							placeholder="Playing Category" ng-required="true"> -->

						<input type="text" id="playerCategory" ng-model="$parent.playerCategory" placeholder="Select your Playing Category" uib-typeahead="category as category.category for category in categories | filter:$viewValue" class="form-control" typeahead-show-hint="true" typeahead-min-length="0" ng-required="true" >

					</div>

				</div>
				<div class="modal-footer">
					<button class="btn btn-default pull-left"
						data-dismiss="modal" ng-click="cancel()">Close</button>
					<button class="btn btn-primary"
						ng-click="formAddCategory.$valid && addNewCategory()">Add Category</button>
				</div>
			</form>
		</div>

		<!--  the remove button then -->
		<div ng-if="data.type == 'remove'">
			<div class="modal-body" id="modal-body">
				<h4>{{data.body}}</h4>
				<button class="btn btn-lg btn-danger btn-block"
					ng-click="removeCategory(data.recordId)">Yes, Delete it</button>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default pull-left"
					data-dismiss="modal" ng-click="cancel()">Close</button>
			</div>
		</div>


	</div>
</div>
