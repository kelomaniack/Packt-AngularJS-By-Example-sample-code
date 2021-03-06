'use strict';

angular.module('app', ['ngRoute', '7minWorkout'])
    .config(function ($routeProvider, $sceDelegateProvider) {
        $routeProvider.when('/start', {
            templateUrl: 'partials/start.html'
        });
        $routeProvider.when('/workout', {
            templateUrl: 'partials/workout.html',
            controller: 'WorkoutController'
        });
        $routeProvider.when('/finish', {
            templateUrl: 'partials/finish.html'
        });
        $routeProvider.otherwise({
            redirectTo: '/start'
        });
        // use the HTML5 History API
        //$locationProvider.html5Mode(true);

        // Allow same origin resource loads and from youtube
        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'http://*.youtube.com/**']);

    });

angular.module('7minWorkout', []);