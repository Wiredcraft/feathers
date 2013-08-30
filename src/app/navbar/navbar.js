angular.module( 'Devops.navbar', [])
.controller('NavbarCtrl', ['$rootScope', '$scope', '$location',
    function($rootScope, $scope, $location) {
        // menu
        $scope.menu = [{
            title: 'Servers',
            name: 'servers',
            url: '#/servers'
        }, {
            title: 'Jobs',
            name: 'jobs',
            url: '#/jobs'
        }];

        // active or deactive menu style
        $scope.$watch('$state.current', function(aft, bef) {
            if(aft === bef) return;
            $scope.activeElement = aft.name.split('.')[0];
        });

    }
])
