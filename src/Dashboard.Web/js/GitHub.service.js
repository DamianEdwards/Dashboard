(function () {
    var api = "https://api.github.com/";

    function GitHub($http) {
        return {
            getIssuesCount: function (repo, milestone) {
                var url = api + "repos/" + repo + "/milestones/" + milestone;
                return $http.get(url).then(function(result) {
                    return result.data.open_issues;
                });
            }
        };
    }

    var dashboard = angular.module("Dashboard");
    dashboard.factory("GitHub", GitHub);
})();