describe( 'FeathersCtrl', function() {
  describe( 'isCurrentUrl', function() {
    var FeathersCtrl, $location, $scope;

    beforeEach( module( 'Feathers' ) );

    beforeEach( inject( function( $controller, _$location_, $rootScope ) {
      $location = _$location_;
      $scope = $rootScope.$new();
      FeathersCtrl = $controller( 'FeathersCtrl', { $location: $location, $scope: $scope });
    }));

    it( 'should pass a dummy test', inject( function() {
      expect( FeathersCtrl ).toBeTruthy();
    }));
  });
});
