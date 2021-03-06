app.controller('authCtrl', function ($scope, $rootScope, $routeParams, $location, $http, $log, Data) {
    //initially set those objects to null to avoid undefined error
    $scope.login = {};
    //$scope.signup = {};
    $scope.doLogin = function (customer) {
        Data.post('login', {
            customer: customer
        }).then(function (results) {
            //Data.toast(results);
            if (results.status == "success") {
                $rootScope.user=results;
                $location.path('dashboard');
            }
        });
    };
/*
    $scope.signup = {username:'',password:'',name:''};
    $scope.signUp = function (customer) {
        Data.post('signUp', {
            customer: customer
        }).then(function (results) {
            Data.toast(results);
            if (results.status == "success") {
                $location.path('dashboard');
            }
        }, function(reason) {
            Data.toast(reason);
        });
    };
*/
    $scope.logout = function () {
        Data.get('logout').then(function (results) {
            Data.toast(results);
            $location.path('login');
        });
    }
});
