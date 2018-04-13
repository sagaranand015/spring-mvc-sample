
<div class="modal-dialog">
	<div class="modal-content">
		<div class="modal-header">
			<h3 class="modal-title text-center" id="modal-title">{{data.headline}}</h3>
		</div>

		<!--  the add form first -->
		<div ng-if="data.type == 'add'">
			<form name="formAddGrade">
				<div class="modal-body" id="modal-body">
					<h4>{{data.body}}</h4>

					<div class="form-group">
						<label for="playerPosition">Playing Grade*</label> <input
							id="playerGrade" type="text" class="form-control"
							name="playerGrade" ng-model="$parent.playerGrade"
							placeholder="Playing Grade" ng-required="true">
					</div>

					<div class="form-group">
						<label for="playerPosition">Grade Year Played</label> <input
							id="playerGradeYear" type="text" class="form-control"
							name="playerGradeYear" ng-model="$parent.playerGradeYear"
							ng-init="$parent.playerGradeYear=''"
							placeholder="Grade Year Played">
					</div>

					<div class="form-group">
						<label for="playerPosition">Grade Game Played</label> <input
							id="playerGradeGame" type="text" class="form-control"
							name="playerGradeGame" ng-model="$parent.playerGradeGame"
							ng-init="$parent.playerGradeGame=''"
							placeholder="Grade Game Played">
					</div>

				</div>
				<div class="modal-footer">
					<button class="btn btn-default pull-left"
						data-dismiss="modal" ng-click="cancel()">Close</button>
					<button class="btn btn-primary"
						ng-click="formAddGrade.$valid && addNewGrade()">Add Grade</button>
				</div>
			</form>
		</div>

		<!--  the remove button then -->
		<div ng-if="data.type == 'remove'">
			<div class="modal-body" id="modal-body">
				<h4>{{data.body}}</h4>
				<button class="btn btn-lg btn-danger btn-block"
					ng-click="removeGrade(data.recordId)">Yes, Delete it</button>
			</div>
			<div class="modal-footer">
				<button type="button" class="btn btn-default pull-left"
					data-dismiss="modal" ng-click="cancel()">Close</button>
			</div>
		</div>


	</div>
</div>
