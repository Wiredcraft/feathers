'use strict';

/* Controllers */

function MainCtrl($scope, $routeParams, City, Country, Region) {
    $scope.cities = City.query();
    $scope.countries = Country.query();
    $scope.regions = Region.query();
}

/* City */
function CityCtrl($scope, $routeParams, City) {
    $scope.city = City.get({cityName: $routeParams.cityName});
}

/* Country */
function CountryCtrl($scope, $routeParams, Country) {
    $scope.country = Country.get({countryName: $routeParams.countryName});
}

/* Region */
function RegionCtrl($scope, $routeParams, Region) {
    $scope.region = Region.get({regionId: $routeParams.regionId});
}