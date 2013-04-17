'use strict';

/* Services */

angular.module('RegionServices', ['ngResource']).
    factory('Region', function($resource){
        return $resource('../data/regions/:regionId.json', {}, {
            query: {method:'GET', params:{regionId: 'regions'}, isArray:true}
        });
    });
    
angular.module('CountryServices', ['ngResource']).    
    factory('Country', function($resource){
        return $resource('../data/countries/:countryName.json', {}, {
            query: {method:'GET', params:{countryName: 'countries'}, isArray:true}
        });
    });
    
angular.module('CityServices', ['ngResource']).    
    factory('City', function($resource){
        return $resource('../data/cities/:cityName.json', {}, {
            query: {method:'GET', params:{cityName: 'cities'}, isArray:true}
        });
    });
