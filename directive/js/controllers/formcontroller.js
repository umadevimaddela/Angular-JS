angular.module("uma").controller("formController", formControllerModel);

function formControllerModel($scope) {
    $scope.name = "uma";
    $scope.firstname = "uma";
    $scope.lastname = "devi";
    //$scope.test = "my name <h2>phython</h2>";
    $scope.test = "welcome";
    $scope.uma = "Welcome";
    $scope.copycount = 0;
    $scope.cutcount = 0;
    $scope.details = "1.Uma,2.Devi";
    $scope.name = ["1.pune,2.goa"];
}