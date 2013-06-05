/**
 * Formstacular for building form with Foundation
 * Alex S
 */
var Foundation = angular.module('Foundation.directives', []);

Foundation.directive('fdInput', ['$compile', function($compile) {
	return {
		restrict : 'E',
		scope : {
			bindData : '=',
			label : '@',
			placeholder : '@',
			errorMsg : '@',
			required : '@',
			type : '@'
		},

		link : function(scope, el, attrs) {
			var type = scope.type || 'text';
			var required = scope.required ? "required='required'" : "";

			var htmlInput = '<div class="row collapse">' +
			'<div class="small-3 large-2 columns">' +
			'<span class="prefix">' + scope.label + '</span>' +
			'</div>' +
			'<div class="small-9 large-10 columns">' + 
			'<input type="' + type + '" ng-model="bindData" placeholder="' + scope.placeholder + '" ' + required + '>' +
			'</div>' + 
			'</div>';

			el.replaceWith($compile(htmlInput)(scope));
		}
	};
}]);
