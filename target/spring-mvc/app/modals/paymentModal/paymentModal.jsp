<%@ taglib prefix="sec"
	uri="http://www.springframework.org/security/tags"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<div class="modal-content">
	<div class="modal-header">
		<h3 class="modal-title text-center" id="modal-title">{{data.headline}}</h3>
	</div>
	<div class="modal-body" id="modal-body">
		<!-- ng-submit="submitPaymentForm()" -->
		<form id="form-payment-01" action="subscribe/payment" name="ccForm"
			method="POST">

			<div class="row">

				<div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">
					<p>{{data.body.para1}}</p>
				</div>

				<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
					<table class="table">
						<tr>
							<td><small class="textbox-label-small pull-left">Club
									Name*</small><input type="text" class="form-control" id="txt-name"
								name="txtName" placeholder="Enter CLub Name*" ng-model="txtName"
								required /> <span id="val_err"
								ng-show="form.txtName.$touched && form.txtName.$invalid ">Name
									Is Invalid</span></td>
						</tr>
						<tr>
							<td><small class="textbox-label-small pull-left">Club
									Contact Number*</small><input type="text" class="form-control"
								id="txt-mobile" name="txtMobile"
								placeholder="Enter CLub Contact Number*" ng-model="txtMobile"
								required /> <span id="val_err"
								ng-show="form.txtMobile.$touched && form.txtMobile.$invalid ">Contact
									Number Is Invalid</span></td>
						</tr>
					</table>
				</div>

				<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
					<table class="table">
						<tr>
							<td><small class="textbox-label-small pull-left">Club
									Email*</small><input type="email" class="form-control" id="txt-email"
								name="txtEmail" placeholder="Enter Club Email*"
								ng-model="txtEmail" required /> <span id="val_err"
								ng-show="form.txtEmail.$touched && form.txtEmail.$invalid ">Email
									Is Invalid</span></td>
						</tr>
						<tr>
							<td><small class="textbox-label-small pull-left">Payment
									Contact Person Name*</small><input type="text" class="form-control"
								id="txt-contact-name" name="txtContactName"
								placeholder="Enter Payment Contact Person Name*"
								ng-model="txtContactName" required /> <span id="val_err"
								ng-show="form.txtContactName.$touched && form.txtContactName.$invalid ">Name
									Is Invalid</span></td>
						</tr>
					</table>
				</div>

			</div>
			<!-- ./ end of row -->


			<div class="row">

				<div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">
					<p>{{data.body.para2}}</p>
				</div>

				<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
					<table class="table">
						<tr>
							<td><small class="textbox-label-small pull-left">Card
									Number*</small><input type="text" class="form-control" cc-number
								cc-eager-type id="txt-card-number" name="ccNumber"
								placeholder="Enter Card Number*" ng-model="txtCardNumber"
								required /> <span id="val_err"
								ng-show="!ccForm.ccNumber.$valid">Card Number Is Invalid</span>
								<span class="pull-right" id="type_err">{{ccForm.ccNumber.$ccType}}</span>
						</tr>
						<tr>
							<td><small class="textbox-label-small pull-left">Card
									Expiry Month (mm)*</small><input type="text" class="form-control"
								cc-exp cc-exp-month id="txt-expiry-month" name="ccExpMonth"
								placeholder="Enter Card Expiry Month (mm)*"
								ng-model="txtExpiryMonth" required /> <span id="val_err"
								ng-show="!ccForm.ccExpMonth.$valid">Card Expiry Month Is
									Invalid</span></td>

						</tr>
					</table>
				</div>

				<div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
					<table class="table">
						<tr>
							<td><small class="textbox-label-small pull-left">Card
									Expiry Year (yy)*</small><input type="text" class="form-control" cc-exp
								cc-exp-year id="txt-expiry-year" name="ccExpYear"
								placeholder="Enter Card Expiry Year (yy)*"
								ng-model="txtExpiryYear" required /> <span id="val_err"
								ng-show="!ccForm.ccExpYear.$valid">Card Expiry Year Is
									Invalid</span></td>
						</tr>
						<tr>
							<td><small class="textbox-label-small pull-left">CVV
									No.*</small><input type="password" class="form-control" id="txt-email"
								cc-cvc cc-type="ccForm.ccNumber.$ccType" name="ccCvc"
								placeholder="Enter CVV No.*" ng-model="txtCvv" required /> <span
								id="val_err" ng-show="!ccForm.ccCvc.$valid">CVV Is
									Invalid</span></td>
						</tr>
					</table>
				</div>

				<input type="hidden" name="planId" id="planId"
					ng-value="planId" />
				<input type="hidden" name="authToken" id="authToken"
					ng-value="authToken" />
				<sec:csrfInput />
				<div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">
					<button id="btn-payment-form" name="btn-payment-form"
						class="btn btn-lg btn-primary btn-block" value="Submit">
						Submit</button>
				</div>
			</div>

		</form>

	</div>
	<div class="modal-footer">
		<button class="btn btn-warning" type="button" ng-click="cancel()">Cancel</button>
	</div>
</div>