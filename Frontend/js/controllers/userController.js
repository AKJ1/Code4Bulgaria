app.controller('userController', ['$scope', 'authService', function($scope, authService, $location){
	$scope.login = function(){
		var loginData = {
			username: $scope.user.name,
			password: $scope.user.password,
			grant_type: 'password'
		}
		var success = function(result){
			sessionStorage["Authorization"] = "Bearer " + result.token;
			
			alert('Ok');
		}
		var error = function(result){
		
			alert(result);
		}
		authService.login(loginData, success, error)
	}

	$scope.register = function(email, password, repeatPassowrd){

		var userData = {
			username : email,
			password : password,
			repeatPassowrd : repeatPassowrd
		}
		var success = function(result){
			sessionStorage["Authorization"] = "Bearer " + result.token;
		}
		var error = function(result){
			alert(result);
		}
		authService.register(userData, sucess, error )  
	}

	$scope.logout = function(){
		var sucess = function(){
			delete(sessionStorage["Authorization"]);
		}
		authService.logout();
	}
}])