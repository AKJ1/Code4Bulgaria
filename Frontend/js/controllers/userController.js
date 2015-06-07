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
		console.log(result);
			alert(result);
		}
		authService.login(loginData).success(function(result){
			sessionStorage["Authorization"] = "Bearer " + result['access_token'];
			console.log(result);
			alert('Ok');
		}).error(function(result){
		console.log(result);
			alert('Ofdfsfsk');
			alert(result);
		})
	}

	$scope.register = function(){

		var userData = {
			email : $scope.user.name,
			password : $scope.user.password,
			confirmPassword : $scope.user.password
		}
		var success = function(result){
			sessionStorage["Authorization"] = "Bearer " + result.token;
			console.log(result);
		}
		var error = function(result){
			alert(result);
		}
		
		authService.register(userData).success(function(data) {
                    success(data);
                }).error(data);
	}
	
	$scope.addDetails = function(){
	var updateData = {
			FirstName: $scope.user.firstName,
			MiddleName: $scope.user.middleName,
			LastName: $scope.user.lastName,
			Adress: $scope.user.address,
			PhoneNumber: $scope.user.phone,
		}
		var success = function(result){
			sessionStorage["Authorization"] = "Bearer " + result.token;
			console.log(result);
		}
		var error = function(result){
			alert(result);
		}
		
		authService.details(updateData).success(function(data) {
                    success(data);
                }).error(data);
	}

	$scope.logout = function(){
		var sucess = function(){
			delete(sessionStorage["Authorization"]);
		}
		authService.logout();
	}
}])