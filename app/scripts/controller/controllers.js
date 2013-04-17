'use strict';

/* Controllers */

function MainCtrl($scope, $routeParams, City, Region) {
    // $scope.cities = City.get({cityName:$routeParams.cityName});
    // $scope.regions = Region.get({regionId:$routeParams.regionId})
    // $scope.cities = City.query();
    // $scope.countries = Country.query();
    // $scope.regions = Region.query();
    
    // $scope.client = Clients.get({id:$routeParams.clientId})
    // $scope.bills = ClientBills.get({clientId:$routeParams.clientId})
}

/* City */
function CitiesCtrl($scope, City) {
    $scope.cities = City.query();
}
//CitiesCtrl.$inject = ['$scope', 'City'];

function CityCtrl($scope, $routeParams, City) {
    $scope.city = City.get({cityName: $routeParams.cityName});
}
//CityCtrl.$inject = ['$scope', '$routeParams', 'City'];


/* Country */
function CountriesCtrl($scope, Country) {
    $scope.countries = Country.query();
}
//CountriesCtrl.$inject = ['$scope', 'Country'];

function CountryCtrl($scope, $routeParams, Country) {
    $scope.country = Country.get({countryName: $routeParams.countryName});
}
//CountryCtrl.$inject = ['$scope', '$routeParams', 'Country'];


/* Region */
function RegionsCtrl($scope, Region) {
    $scope.regions = Region.query();
}
//RegionsCtrl.$inject = ['$scope', 'Region'];

function RegionCtrl($scope, $routeParams, Region) {
    $scope.region = Region.get({regionId: $routeParams.regionId});
}
//RegionCtrl.$inject = ['$scope', '$routeParams', 'Region'];