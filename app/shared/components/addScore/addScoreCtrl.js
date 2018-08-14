app.controller('addScoreCtrl', function ($scope, $rootScope, $modalInstance, game, Data) {

    $scope.game = game;
    $scope.userScore = {};
    $scope.userScore.gameId = game.id;
    $scope.userScore.uid = $rootScope.uid;

    Data.get('userScore/' + game.id)
        .then(function (results) {
            if (results.status == 'success') {
                $scope.userScore = results.userScore;
            }
            //Data.toast(results);
        }, function (reason) {
            Data.toast(reason);
        });


    $scope.ok = function () {
        Data.post('addscore', {
            userScore: $scope.userScore
        }).then(function(results){
            if (results.status == 'success') {
                $modalInstance.close($scope.userScore);
            }
            Data.toast(results);
        }, function(reason) {
            Data.toast(reason);
        });

    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});
