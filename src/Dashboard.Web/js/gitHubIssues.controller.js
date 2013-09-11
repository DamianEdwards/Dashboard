(function (angular) {
    "use strict";

    function GitHubIssuesController($scope, $attrs, GitHub) {

        var settings = {
            repository: $attrs.repository,
            milestoneId: $attrs.milestoneid
        };

        if (!settings.repository) {
            throw new Error("No GitHub repository specified. Please configure a GitHub repository by adding a data-repository attribute to the element, e.g. <div ng-controller='GitHubIssues' data-repository='signalr/signalr'></div>");
        }

        if (!settings.milestoneId) {
            throw new Error("No milestone specified. Please configure a milestone by adding a data-milestoneId attribute to the element, e.g. <div ng-controller='GitHubIssues' data-milestoneId='30'></div>");
        }

        GitHub.getIssuesCount(settings.repository, settings.milestoneId)
            .then(function (result) {
                $scope.count = result;
            });
    }

    angular.module("Dashboard")
        .controller("GitHubIssues", GitHubIssuesController);

})(window.angular);