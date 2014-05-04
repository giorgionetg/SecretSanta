var secretSantaControllers = angular.module('secretSantaControllers', []);

/**
 * ListCreateController
 */
secretSantaControllers.controller('ListCreateController', ['$scope', '$http', function ($scope, $http) {

    $scope.list = {
        message: "",
        participants: [
            { "name": "", "email": "" },
            { "name": "", "email": "" },
            { "name": "", "email": "" }
        ]
    }


    $scope.addParticipant = function () {
        $scope.list.participants.push({name: '', email: ''});
    };

    $scope.removeParticipant = function () {
        $scope.list.participants.pop();
    };

}]);


/**
 * ListManageController
 */
secretSantaControllers.controller('ListManageController', ['$scope', '$http', '$routeParams', '$location', function ($scope, $http, $routeParams, $location) {
    $http
        .get('list/' + $routeParams.listId + '.json')
        .success(function (data) {
        })
        .error(function () {
            $location.path('/create')
        });
}]);

/**
 * EntryDetailController
 */
secretSantaControllers.controller('EntryDetailController', ['$scope', '$http', '$routeParams', '$location', function ($scope, $http, $routeParams, $location) {
    $http
        .get('entry/' + $routeParams.entryId + '.json')
        .success(function (data) {
        })
        .error(function () {
            $location.path('/create')
        });
}]);

