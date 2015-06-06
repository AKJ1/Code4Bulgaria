app.controller('HomeController', ['$scope', '$rootScope', function($scope, $rootScope){
	$scope.isAuthenticated = function(){
		return false;
	};

	$scope.loginEnabled = false;

	$scope.alert = function(string){
		alert(string);
	};

	$scope.toggleLoginForm = function(){
		$scope.loginEnabled = !$scope.loginEnabled;
		alert($scope.loginEnabled);
	};
}]);