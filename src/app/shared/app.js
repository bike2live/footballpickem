var app = angular.module('myApp', ['ngRoute', 'ngAnimate', 'toaster', 'ui.bootstrap']);

app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                title: 'Login',
                templateUrl: 'app/components/login/login.html',
                controller: 'authCtrl',
                role: '0'
            })
            .when('/login', {
                title: 'Login',
                templateUrl: 'app/components/login/login.html',
                controller: 'authCtrl'
            })
            .when('/logout', {
                title: 'Logout',
                templateUrl: 'app/components/login/login.html',
                controller: 'logoutCtrl'
            })
            .when('/signup', {
                title: 'Signup',
                templateUrl: 'partials/signup.html',
                controller: 'authCtrl'
            })
            .when('/dashboard', {
                title: 'Dashboard',
                templateUrl: 'app/components/dashboard/dashboard.html',
                controller: 'dashboardCtrl'
            })
            .when('/schedule', {
                title: 'Schedule',
                templateUrl: 'app/components/schedule/schedule.html',
                controller: 'scheduleCtrl'
            })
            .when('/leaderBoard', {
                title: 'Leader Board',
                templateUrl: 'app/components/leaderBoard/leaderBoard.html',
                controller: 'leaderBoardCtrl'
            })
            .when('/rules', {
                title: 'Rules',
                templateUrl: 'app/components/rules/rules.html',
                controller: 'rulesCtrl'
            })
            .when('/game/:gameId', {
                title: 'Game',
                templateUrl: 'app/components/game/game.html',
                controller: 'gameCtrl'
            })
            .otherwise({
                redirectTo: '/login'
            });

        $locationProvider.html5Mode(true);

    }])
    .run(function ($rootScope, $location, Data) {
        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            $rootScope.authenticated = false;
            Data.get('session').then(function (results) {
                if (results.uid) {
                    $rootScope.authenticated = true;
                    $rootScope.uid = results.uid;
                    $rootScope.name = results.name;
                    $rootScope.username = results.username;
                } else {
                    var nextUrl = next.$$route.originalPath;
                    if (nextUrl == '/signup' || nextUrl == '/login') {

                    } else {
                        $location.path("/login");
                    }
                }
            });
        });
    });
