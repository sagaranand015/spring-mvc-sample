<div class="modal-dialog">
	<div class="modal-content">
		<div class="modal-header">
			<h3 class="modal-title text-center" id="modal-title">{{data.headline}}</h3>
		</div>

		<!--  the add form first -->
		<div ng-if="data.type == 'add'">
			<form name="formAddLocation">
				<div class="modal-body" id="modal-body">
					<h4>{{data.body}}</h4>

					<div class="form-group">
						<label for="preferredState">Preferred Playing State*</label> <input
							id="preferredState" type="text" class="form-control"
							name="preferredState" ng-model="$parent.preferredState"
							placeholder="Preferred Playing State" ng-required="true">
					</div>

					<div class="form-group">
						<label for="preferredCity">Preferred Playing City*</label> <input
							id="preferredCity" type="text" class="form-control"
							name="preferredCity" ng-model="$parent.preferredCity"
							placeholder="Preferred Playing City" ng-required="true">
					</div>
				</div>

				<div class="modal-footer">
					<button class="btn btn-default pull-left" data-dismiss="modal"
						ng-click="cancel()">Close</button>
					<button class="btn btn-primary"
						ng-click="formAddLocation.$valid && addNewLocation()">Add
						Location</button>
				</div>
			</form>

		</div>

		<!--  the remove button then -->
		<div ng-if="data.type == 'remove'">
			<div class="modal-body" id="modal-body">
				<h4>{{data.body}}</h4>
				<button class="btn btn-lg btn-danger btn-block"
					ng-click="removeLocation(data.recordId)">Yes, Delete it</button>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default pull-left"
					data-dismiss="modal" ng-click="cancel()">Close</button>
			</div>

		</div>

	</div>
</div>
</div>