(function () {
    "use strict";

    function GitHubIssuesController($scope, GitHub) {

        $scope.init = function (repository, milestoneId) {
            GitHub.getIssuesCount(repository, milestoneId).then(function (result) {
                $scope.count = result;
            });
        }
    }

    var dashboard = angular.module("Dashboard");
    dashboard.controller("GitHubIssues", GitHubIssuesController);
})();