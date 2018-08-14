app.controller('editGameScoreCtrl', function ($scope, $modalInstance, $log, game, Data) {

    $scope.game = game;
    $scope.game.week = parseInt($scope.game.week);

    $scope.saveGame = function() {

        Data.post('editGameScore/' + $scope.game.id, {
            game: $scope.game
        }).then(function(results){
            Data.toast(results);
            if (results.status !== 'error') {
                $modalInstance.close($scope.game);
            }
        }, function(reason) {
            Data.toast(reason);
        });

    };

    $scope.ok = function () {
        $scope.saveGame();
    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

});

