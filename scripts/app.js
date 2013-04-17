'use strict';

/* App Module */

angular.module('ngApp', ['CityServices','CountryServices','RegionServices']).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/', {templateUrl: '../views/main.html',   controller: MainCtrl}).
    when('/city/:countryName/:cityName', {templateUrl: '../views/detail-city.html', controller: CityCtrl}).
    when('/countries/:countryName', {templateUrl: '../views/detail-country.html', controller: CountryCtrl}).
    when('/regions/:regionId', {templateUrl: '../views/detail-region.html', controller: RegionCtrl}).
    otherwise({redirectTo: '/'});
}]);
