app.controller('userController', ['$scope', 'authService', function($scope, authService){
	$scope.login = function(username, password){
		var loginData = {
			username: username,
			password: password
		}
		var success = function(result){
			sessionStorage["Authorization"] = "Bearer " + result.token;
		}
		var error = function(result){
			alert(result);
		}
		authService.login(logindata, sucess)
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