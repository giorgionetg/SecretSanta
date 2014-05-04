var secretSantaApp = angular.module('secretSantaApp', [
    'ngRoute',
    'secretSantaControllers'
]);

secretSantaApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('/create', {
            templateUrl: 'partials/list-create.html',
            controller: 'ListCreateController'
        }).when('/manage/:listId', {
            templateUrl: 'partials/list-manage.html',
            controller: 'ListManageController'
        }).when('/entry/:entryId', {
            templateUrl: 'partials/entry-details.html',
            controller: 'EntryDetailController'
        }).when('/needs-validation', {
            templateUrl: 'partials/list-needsvalidation.html'
        }).otherwise({
            redirectTo: '/create'
        });
}]);
