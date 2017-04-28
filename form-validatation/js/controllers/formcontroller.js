angular.module("ranjith").controller("formController", formControllerModel);

function formControllerModel($scope) {
    $scope.abc = function() {
        //var name = $scope.fm.name;
        console.log($scope.fm);
        if ($scope.fm.name.$invalid) {
            alert("please enter name");
        } else {
            console.log(name);
        }
        if ($scope.fm.email.$invalid) {
            alert("please enter email");
        } else {
            console.log(email);
        }
        if ($scope.fm.username.$invalid) {
            alert("please enter username");
        } else {
            console.log(username);
        }
        if ($scope.fm.password.$invalid) {
            alert("please enter password");
        } else {
            console.log(password);
        }
        if ($scope.fm.phone.$invalid) {
            alert("please enter phonenumber");
        } else {
            console.log(phonenumber);
        }

        if ($scope.fm.checkbox.$invalid) {
            alert("please agree the conditions");
        } else {
            console.log(checkbox);
        }
    }


}