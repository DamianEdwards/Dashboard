(function (angular) {
    "use strict";

    function UriBuilder(uri) {
        this.scheme = "";
        this.host = "";
        this.port = "";
        this.path = "";
        this.query = "";
        this.fragment = "";
    }

    UriBuilder.prototype = {

    };

    function factory() {
        return {
            fromString: function (uri) {
                return new UriBuilder(uri);
            }
        };
    }

    angular.module("Dashboard")
        .factory("UriBuilder", factory);

})(window.angular);