app.controller('scheduleCtrl', function ($scope, $rootScope, $routeParams, $location, $http, $modal, $log, $filter, Data) {

    //initially set those objects to null to avoid undefined error
    $scope.schedule = {};
    $scope.userScore = {};
    $scope.userScore.uid = $rootScope.uid;
    var getSession = function() {
        return Data.get('session').then(function(results) {
            if (!results.roles) {
                return $q.reject('not Authenticated');
            }
            $scope.session = results;
            $scope.admin = false;
            angular.forEach($scope.session.roles, function(role, key) {
                if (role === 'ADMIN') {
                    $scope.admin = true;
                }
            });
            return $scope.session;
        }, function (reason) {
            var result = {};
            result.status='error';
            result.message = reason.statusText;
            Data.toast(result);
            return $q.reject('not Authenticated');
        });

    };
    var getSchedule = function () {
        return Data.get('schedule').then(function (results) {
            $scope.schedule = results;
            angular.forEach($scope.schedule.games,  function(game, key) {
                if (game.byuScore != null) {
                    game.diff = game.byuScore - game.oppScore;
                }
                var gDate = new Date(Date.parse(game.gameDate.replace(' ', 'T')));
            });
        }, function(reason) {
            var result = {};
            result.status='error';
            result.message = reason.statusText;
            Data.toast(result);
        });
    };
    var reportProblems = function( fault ) {
        $log.debug( 'schedule: ' + String(fault) );
        return $location.path('/');
    };

    getSession()
        .then( getSchedule )
        .catch( reportProblems );

    $scope.now = new Date();
    $scope.isGamePast = function(game) {
        return $scope.now > new Date(Date.parse(game.gameDate.replace(' ', 'T')));
    };
    $scope.isPastCloseDate = function(game) {
        return $scope.now > new Date(Date.parse(game.closeDate.replace(' ', 'T')));
    };

    $scope.isHomeGame = function(game) {
        return game.location == 'Provo, UT'
    };

    $scope.getRowClass = function(game) {
        return {
            past: game.byuScore != null
        };
    };

    $scope.logout = function () {
        Data.get('logout').then(function (results) {
            Data.toast(results);
            $location.path('login');
        });
    };

    $scope.addScore = function (game) {

        if ($scope.isPastCloseDate(game)) {
            alert('Oh snap, too late! You missed the cutoff time to enter a score for this game.');
            return;
        }

        var modalInstance = $modal.open({
            templateUrl: 'app/components/addScore/addScore.html',
            controller: 'addScoreCtrl',
            resolve: {
                game: function () {
                    return game;
                }
            }

        });

        modalInstance.result.then(function (userScore) {
            $scope.userScore = userScore;
            $log.info('Modal dismissed at: ' + new Date());
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };


    $scope.addGame = function() {
        $scope.game = {};
        $scope.game.week = 3;
        var modalInstance = $modal.open({
            templateUrl: 'app/components/addGame/addEditGame.html',
            controller: 'addGameCtrl',
            resolve: {
                game: function () {
                    return $scope.game;
                }
            }
        });
        modalInstance.result.then(function () {
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };

    $scope.addGameScore = function (game) {

/*
        if (!$scope.isGamePast(game)) {
            alert('The game has to at least be started before you can enter the game score!');
            return;
        }
*/
        var modalInstance = $modal.open({
            templateUrl: 'app/components/editGameScore/editGameScore.html',
            controller: 'editGameScoreCtrl',
            resolve: {
                game: function () {
                    return game;
                }
            }

        });

        modalInstance.result.then(function (userScore) {
            $scope.userScore = userScore;
            $log.info('Modal dismissed at: ' + new Date());
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };


});

