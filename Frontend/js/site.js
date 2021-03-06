'use strict'

var app = angular.module('hackathonApp', ['ngResource', 'ngRoute']);

app.constant('serviceUrl', '');
app.constant('googleAuthenticationToken', '903626929312-0v5480i71kbj2h1un88so0allu5omb50.apps.googleusercontent.com');
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	});

	$routeProvider.when('/signal/create', {			
		templateUrl: '/templates/form.html',
		controller: 'formController'
	});

	$routeProvider.when('/user/profile', {			
		templateUrl: 'templates/registerPartTwo.html',
		controller: 'userController'

	});

}]);