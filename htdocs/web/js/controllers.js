var secretSantaControllers = angular.module('secretSantaControllers', []);

secretSantaControllers.controller('CreateController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

    $scope.participants = [
        { "name": "", "email": "" },
        { "name": "", "email": "" },
        { "name": "", "email": "" }
    ]


    $scope.addParticipant = function () {
        $scope.participants.push({name: '', email: ''});
    };

    $scope.removeParticipant = function () {
        $scope.participants.pop();
    };

}]);

