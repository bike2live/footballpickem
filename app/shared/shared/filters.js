app.filter('timeFilter', ['$filter', function ($filter) {
    return function (input) {
        if (input == null) { return ""; }

        var gDate = new Date(Date.parse(input));
        var time = $filter('date')(gDate, "shortTime");
        if (time == '12:00 AM') {
            return 'TBA';
        }
        return time;
    }
}]);

app.filter('dateFilter', ['$filter', function ($filter) {
    return function (input) {
        if (input == null) { return ""; }
        return $filter('date')(new Date(Date.parse(input)), "mediumDate");
    }
}]);

app.filter('weekDayFilter', ['$filter', function ($filter) {
    return function (input) {
        if (input == null) { return ""; }
        return $filter('date')(new Date(Date.parse(input)), "EEEE");
    }
}]);
