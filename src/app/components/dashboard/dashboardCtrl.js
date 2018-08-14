app.controller('dashboardCtrl', function ($scope, $rootScope, $routeParams, $location, $http, $modal, $log, $filter, Data) {

    //initially set those objects to null to avoid undefined error
    $scope.schedule = {};
    $scope.userScore = {};
    $scope.currentGame = {};
    $scope.isEditable = false;
    $scope.userScore.uid = $rootScope.uid;
    var getSchedule = function () {
        return Data.get('schedule').then(function (results) {
//            Data.toast(results);
            $scope.schedule = results;
            var today = new Date();
            //var today = new Date(Date.parse("09/18/2014 00:00:00"));
            var previousGameDate = new Date("11/30/2013");
            var previousShowUntilDate = new Date("01/01/2014");
            var previousCloseDate = new Date("01/01/2014");
            angular.forEach($scope.schedule.games,  function(game, key) {
                if (game.byuScore != null) {
                    game.diff = game.byuScore - game.oppScore;  // this is used to determine if win or loss
                }

                // now we need to figure out which game to display on the dashboard
                var gameDate = new Date(Date.parse(game.gameDate));
                var closeDate = new Date(Date.parse(game.closeDate));
                var showUntilDate = new Date(Date.parse(game.showUntilDate));
                if (today > previousShowUntilDate && today < showUntilDate) {
                    $scope.currentGame = game;
                    $scope.isEditable = today < closeDate;
                }
                previousGameDate = gameDate;
                previousShowUntilDate = showUntilDate;
                previousCloseDate = closeDate;
            });

            //$scope.getUserScore();
            return $scope.currentGame;

        }, function(reason) {
            var result = {};
            result.status='error';
            result.message = reason.statusText;
            Data.toast(result);
            return $q.reject('Failed to get the schedule');
        });
    };

    var getWeeklyUserGuesses = function(currentGame) {
        return Data.get('weeklyUserGuesses/' + currentGame.id).then(function(results) {
            $scope.weeklyGuesses = results.weeklyUserGuesses;
        }, function(reason) {
            var result = {};
            result.status='error';
            result.message = reason.statusText;
            Data.toast(result);
            return $q.reject('Failed to get the weekly user guesses');
        });

    };

    // get all games
    getSchedule()
        .then( getWeeklyUserGuesses )
        .catch( function() {
            console.log('oops');
        });

    $scope.isHomeGame = function() {
        return $scope.currentGame.location == 'Provo, UT'
    };
    $scope.hideScore = function(userGuess) {
        return (userGuess.byuScore > 0 && userGuess.oppScore > 0) ? "fa-star text-success" : "fa-minus text-danger";
    };
    $scope.hasScore = function(userGuess) {
        return (userGuess.byuScore > 0 && userGuess.oppScore > 0) ? "fa-check text-success" : "fa-exclamation-triangle text-danger";
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

    $scope.addScore = function () {
        Data.post('addscore', {
            userScore: $scope.userScore
        }).then(function(results){
            Data.toast(results);
        }, function(reason) {
            Data.toast(reason);
        });
    };
});
