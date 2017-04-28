angular.module("ranjith", ['ui.router']) //set module
angular.module("ranjith").config(function($stateProvider) {
    $stateProvider.state('forms', {
        url: "/forms",
        templateUrl: "templates/form.html",
        controller: "formController"
    });
});