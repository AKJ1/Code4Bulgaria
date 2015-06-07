app.controller('userController', ['$scope', 'authService', function($scope, authService, $location){
	
	$scope.logout = function(){
		var sucess = function(){
			delete(sessionStorage["Authorization"]);
		}
		authService.logout();
	}
}])