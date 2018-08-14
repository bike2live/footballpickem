app.controller('addGameCtrl', function ($scope, $modalInstance, $log, game, Data) {

    $scope.game = game;
    $scope.game.homeOrAway = 1;

    //---- Date Picker settings and functions --------------------------------
    $scope.format = 'mediumDate';

    $scope.openDatePicker = function ($event, opened) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope[opened] = true;
    };
    $scope.initDate = new Date();
    $scope.maxDate = new Date();
    $scope.maxDate.setDate($scope.maxDate.getDate() + 180);
    $scope.minDate = new Date('2015-08-01');
    $scope.game.gameDate = new Date();
    $scope.game.closeDate = new Date();
    $scope.game.showUntilDate = new Date();

    $scope.dateOptions = {
        formatYear: 'yyyy',
        startingDay: 0,
        showWeeks: false,
        showButtonBar: false
    };
    //---- end Date Picker ----------------------------------------------------

    //----- Time picker settings ----------------------------------------------
    $scope.hstep = 1;
    $scope.mstep = 5;
    $scope.ismeridian = true;
    var d = new Date();
    d.setHours(18);
    d.setMinutes(0);
    $scope.game.gameTime = d;
    //----- end time picker ---------------------------------------------------


    $scope.saveGame = function() {

        var dayOfWeek = moment($scope.game.gameDate).format('dddd');
        if (dayOfWeek == 'Saturday') {
            $scope.game.closeDate = $scope.game.gameDate;
            $scope.game.closeDate.setDate( $scope.game.closeDate.getDate() - 1);

            // todo: somehow set the time to 12:00 pm

            $scope.game.showUntilDate = $scope.game.gameDate;
            $scope.game.showUntilDate.setDate( $scope.game.showUntilDate.getDate() + 2);
        } else {
            $scope.game.closeDate = $scope.game.gameDate;

            // todo: we really want Monday...
            $scope.game.showUntilDate = $scope.game.gameDate;
            $scope.game.showUntilDate.setDate( $scope.game.showUntilDate.getDate() + 2);
        }

        // set the close and show Until times to 12:00 pm
        $scope.game.closeDate.setHours(12);
        $scope.game.closeDate.setMinutes(0);
        $scope.game.closeDate.setSeconds(0);

        $scope.game.showUntilDate.setHours(12);
        $scope.game.showUntilDate.setMinutes(0);
        $scope.game.showUntilDate.setSeconds(0);

        // set the game time to that selected
        $scope.game.gameDate.setHours( $scope.game.gameTime.getHours());
        $scope.game.gameDate.setMinutes( $scope.game.gameTime.getMinutes());
        $scope.game.gameDate.setSeconds( 0 );

        // format the dates for insertion into the db
        $scope.game.gameDate = moment($scope.game.gameDate).format("YYYY-MM-DD hh:mm:ss");
        $scope.game.closeDate = moment($scope.game.closeDate).format("YYYY-MM-DD hh:mm:ss");
        $scope.game.showUntilDate = moment($scope.game.showUntilDate).format("YYYY-MM-DD hh:mm:ss");

        Data.post('addgame', {
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

