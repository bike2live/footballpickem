app.controller('navCtrl', function ($scope, $rootScope, $routeParams, $location, $log) {

    $scope.isActive = function(tab) {
        if ($location.path() == tab) {
            return 'active'
        }
        return '';
    };

});
