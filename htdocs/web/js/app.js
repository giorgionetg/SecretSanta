var secretSantaApp = angular.module('secretSantaApp', [
    'ngRoute',
    'secretSantaControllers'
]);

secretSantaApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/create', {
            templateUrl: 'partials/create.html',
            controller: 'CreateController'
        }).otherwise({
            redirectTo: '/create'
        });
}]);