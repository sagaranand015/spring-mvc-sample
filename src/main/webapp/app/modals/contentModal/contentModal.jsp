<div class="modal-content">
	<div class="modal-header">
	    <h3 class="modal-title text-center" id="modal-title" ng-bind-html="heading">
	    	{{heading}}
	    </h3>
	</div>
	<div class="modal-body" id="modal-body" ng-bind-html="content">
		{{content}}
	</div>
	<div class="modal-footer">
	    <button class="btn btn-warning" type="button" ng-click="cancel()">Cancel</button>
	</div>
</div>