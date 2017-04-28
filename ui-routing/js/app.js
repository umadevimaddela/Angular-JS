angular.module("uma", ['ui.router'])
angular.module("uma").config(function($stateProvider) {
    $stateProvider.state('homestate', {
        url: "/homelink",
        templateUrl: "templates/home.html",
        controller: "homeController"
    });

});