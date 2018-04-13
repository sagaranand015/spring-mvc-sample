<!-- <div class="modal"> -->
<div class="modal-dialog">
	<div class="modal-content">
		<div class="modal-header">
			<h3 class="modal-title text-center" id="modal-title">{{data.headline}}</h3>
		</div>
		<!--  the add form first -->
		<div ng-if="data.type == 'add'">
			<form name="formAddLeague">
				<div class="modal-body" id="modal-body">
					<h4>{{data.body}}</h4>

					<div class="form-group">
						<label for="playerLeague">Played In League*</label> <input
							type="text" ng-model="$parent.playerLeague"
							placeholder="Select your Playing League"
							uib-typeahead="league as league.league for league in leagues | filter:$viewValue"
							class="form-control" typeahead-show-hint="true"
							typeahead-min-length="0" ng-required="true">
					</div>

				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default pull-left"
						data-dismiss="modal" ng-click="cancel()">Close</button>
					<button class="btn btn-primary"
						ng-click="formAddLeague.$valid && addNewLeague()">Add
						Playing League</button>
				</div>
			</form>
		</div>

		<!--  the remove button then -->
		<div ng-if="data.type == 'remove'">
			<div class="modal-body" id="modal-body">
				<h4>{{data.body}}</h4>
				<button class="btn btn-lg btn-danger btn-block"
					ng-click="removeLeague(data.recordId)">Yes, Delete it</button>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default pull-left"
					data-dismiss="modal" ng-click="cancel()">Close</button>
			</div>
		</div>

	</div>
</div>
<!-- </div> -->