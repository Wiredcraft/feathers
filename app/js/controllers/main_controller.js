
var MCtrl = angular.module('MainController', []);

MCtrl.controller('NavbarCtrl', ['$scope', '$route', '$location', function($scope, $route, $location) {

  $scope.menuLeft = [];
  $scope.menuRight = [];

  for (key in $route.routes) {
    var route = $route.routes[key];

    if (angular.isDefined(route.menu)) {
      if (angular.isDefined(route.menu.right) && route.menu.right)  {
	$scope.menuRight.push({
	  title : route.menu.title,
	  href : '#' + key
	});
      }
      else {
	$scope.menuLeft.push({
	  title : route.menu.title,
	  href : '#' + key
	});
      }
    }
  }

  $scope.isActive = function(path) { return path.substring(1) == $location.path()}
}]);

MCtrl.controller('NopCtrl', [function() {}]);

