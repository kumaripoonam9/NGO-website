//1. create app module
var donationPerson = angular.module('donationPerson', []);

//2. create controller
donationPerson.controller("donationController", function ($scope, $http) {

    //3. attach originalPerson model object
    $scope.originalPerson = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        gender: '',
        address: '',
        amount: '',
        paymentMethod: ''
    };

    //4. copy originalPerson to person. person will be bind to a form
    $scope.person = angular.copy($scope.originalPerson);

    // 5. create submitStudentForm() function. This will be called when user submits
    // the form
    $scope.submitPersonForm = function () {

        // send $http request to save person
        $scope.submitForm = function (isValid) {
            if (isValid) {
                alert("Form is submitted!");
            }
        };

        var onError = function (data, status, headers, config) {
            alert('Error occured.');
        }

        $http
            .post('/person/submitData', {person: $scope.person})
            .success(onSuccess)
            .error(onError);
    };

    //6. create resetForm() function. This will be called on Reset button click.
    $scope.resetForm = function () {
        $scope.person = angular.copy($scope.originalPerson);
    };
});
