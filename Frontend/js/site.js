'use strict'

var app = angular.module('hackathonApp', ['ngResource', 'ngRoute']);

app.constant('serviceUrl', '');
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
		templateUrl: '/templates/register.html',
		controller: 'formController'
	});
	$routeProvider.when('/login', {			
		templateUrl: 'templates/register.html',
		controller: 'userController'
	});
}]);