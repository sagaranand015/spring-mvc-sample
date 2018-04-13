<div class="modal-content">
	<div class="modal-header">
		<h3 class="modal-title text-center" id="modal-title">{{data.headline}}</h3>
	</div>
	<div class="modal-body" id="modal-body">
		<p>{{data.body}}</p>

		<form id="form-confirm-email" ng-show="isEmailConfirm"
			ng-submit="submitConfirmEmailReq()">
			<table class="table">
				<tr>
					<td><input type="email" class="form-control" id="txt-email"
						name="txtEmailConfirmEmail" placeholder="Enter your Email*"
						ng-model="txtEmailConfirmEmail" required /> <span id="val_err"
						ng-show="form.txtEmail.$touched && form.txtEmail.$invalid ">Email
							Is Invalid</span></td>
				</tr>
				<tr>
					<td>
						<button id="btn-support-msg" name="btn-support-msg"
							class="btn btn-lg btn-primary btn-block" value="Submit">
							Submit</button>
					</td>
				</tr>
			</table>
		</form>

		<form id="form-confirm-email" ng-show="isForgotPassword"
			ng-submit="submitForgotPasswordEmailReq()">
			<table class="table">
				<tr>
					<td><input type="email" class="form-control" id="txt-email"
						name="txtForgotPwdEmail" placeholder="Enter your Email*"
						ng-model="txtForgotPwdEmail" required /> <span id="val_err"
						ng-show="form.txtEmail.$touched && form.txtEmail.$invalid ">Email
							Is Invalid</span></td>
				</tr>
				<tr>
					<td>
						<button id="btn-support-msg" name="btn-support-msg"
							class="btn btn-lg btn-primary btn-block" value="Submit">
							Submit</button>
					</td>
				</tr>
			</table>
		</form>

	</div>
	<div class="modal-footer">
		<button class="btn btn-warning" type="button" ng-click="cancel()">Cancel</button>
	</div>
</div>