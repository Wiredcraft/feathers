
var Filters = angular.module('Filters', []);

Filters.filter('fromNow', function() {
	return function(dateString) {
		return moment(new Date(dateString)).fromNow()
	};
});

Filters.filter('simpleDate', function() {
	return function(dateString) {
		return moment(new Date(dateString))
	};
});