'use strict';

/* App Module */

angular.module('ngApp', ['CityServices','CountryServices','RegionServices']).
config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/', {templateUrl: 'app/views/main.html',   controller: MainCtrl}).
    when('/city/:countryName/:cityName', {templateUrl: 'app/views/detail-city.html', controller: CityCtrl}).
    when('/cities', {templateUrl: 'app/views/list-city.html',   controller: CitiesCtrl}).
    when('/countries/:countryName', {templateUrl: 'app/views/detail-country.html', controller: CountryCtrl}).
    when('/countries', {templateUrl: 'app/views/list-country.html',   controller: CountriesCtrl}).
    when('/regions/:regionId', {templateUrl: 'app/views/detail-region.html', controller: RegionCtrl}).
    when('/regions', {templateUrl: 'app/views/list-region.html',   controller: RegionsCtrl}).
    otherwise({redirectTo: '/'});
}]);
