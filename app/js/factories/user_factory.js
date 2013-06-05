var UserModel = angular.module('User.model', []);

/**
 *
 * User model
 *
 */
UserModel.factory('User', ['$http', function($http) {
	var User = {};

	return User;
});
