app.directive('loginForm', [function () {
	return {
		restrict: 'E',
		templateUrl: 'templates/login.html',
		replace: true
	};
}]);