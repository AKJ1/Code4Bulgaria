'use strict'

var app = angular.module('hackathonApp', ['ngResource', 'ngRoute']);

app.constant('serviceUrl', '');
app.constant('googleAuthenticationToken', '903626929312-0v5480i71kbj2h1un88so0allu5omb50.apps.googleusercontent.com');
app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	});
	$routeProvider.when('/register', {			
		templateUrl: 'templates/register.html',
		controller: 'userController'
	});
	$routeProvider.when('/signal/create', {			
		templateUrl: '/templates/signal.html',
		controller: 'formController'
	});
	$routeProvider.when('/login', {			
		templateUrl: 'templates/login.html',
		controller: 'HomeController'
	});
}]);