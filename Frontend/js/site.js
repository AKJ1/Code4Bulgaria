var app = angular.module('softUniApp', ['ngResource', 'ngRoute', 'ui.bootstrap.pagination'])
.config(function ($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'templates/home.html',
		controller: 'HomeController'
	});
		$routeProvider.when('/register', {
		templateUrl: 'templates/register.html',
		controller: 'userController'
	});
	
});