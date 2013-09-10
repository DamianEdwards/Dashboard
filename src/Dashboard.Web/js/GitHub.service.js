(function (angular) {
    "use strict";

    var api = "https://api.github.com/";

    function GitHubService($http) {
        return {
            getIssuesCount: function (repo, milestone) {
                // TODO: Build this URL in a slightly more elegant way
                var url = api + "repos/" + repo + "/milestones/" + milestone;

                return $http.get(url).then(function(result) {
                    return result.data.open_issues;
                });
            }
        };
    }

    var dashboard = angular.module("Dashboard");
    dashboard.factory("GitHub", GitHubService);

})(window.angular);