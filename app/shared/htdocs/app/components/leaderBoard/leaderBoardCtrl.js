app.controller('leaderBoardCtrl', function ($scope, $log, Data) {

    $log.debug('got to the leaderBoardCtrl');

    var getLeaderBoard = function () {
        return Data.get('leaderBoard').then(function (results) {
            $scope.leaderBoard = results.results;
        }, function(reason) {
            var result = {};
            result.status='error';
            result.message = reason.statusText;
            Data.toast(result);
        });
    };

    getLeaderBoard();

});
