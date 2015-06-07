app.controller('HomeController', ['$scope', '$rootScope', 'insitutionsService','authService', function($scope, $rootScope, insitutionsService, authService){
	$scope.isAuthenticated = function(){
		if(sessionStorage["Authorization"] != undefined){
			return true;
		}
		return false;
	};

	$scope.loginEnabled = false;
	$scope.registerEnabled = false;

	$scope.alert = function(string){
		alert(string);
	};

	$scope.institutions = [
		{
			name: "name",
			description: "description",
			image: "image",			
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt nesciunt doloremque velit laboriosam laborum, earum labore odit reprehenderit temporibus hic totam quam, ad officia voluptates mollitia. At, officia minus expedita?"
		},
		{
			name: "name",
			description: "description",
			image: "image",			
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias totam vero, sapiente alias autem neque ipsam possimus optio reprehenderit consequuntur modi libero dolore voluptate similique, illum quaerat. Rerum, hic, aut!"
		},
		{
			name: "name",
			description: "description",
			image: "image",
			text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eveniet, nihil aut soluta laudantium. Obcaecati illo, at iste facere vel, cupiditate dolorum. Esse quas deserunt labore possimus eligendi eveniet debitis."			
		},
		{
			name: "name",
			description: "description",
			image: "image",			
			text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa nesciunt, distinctio totam eum alias earum impedit? Quaerat eos soluta suscipit molestias autem nam dolorum iusto vitae dolore aliquam, deserunt fuga!"
		},
		{
			name: "name",
			description: "description",
			image: "image",		
			text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa nesciunt, distinctio totam eum alias earum impedit? Quaerat eos soluta suscipit molestias autem nam dolorum iusto vitae dolore aliquam, deserunt fuga!"	
		},
		{
			name: "name",
			description: "description",
			image: "image",			
			text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eveniet, nihil aut soluta laudantium. Obcaecati illo, at iste facere vel, cupiditate dolorum. Esse quas deserunt labore possimus eligendi eveniet debitis."			
		},
		{
			name: "name",
			description: "description",
			image: "image",			
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias totam vero, sapiente alias autem neque ipsam possimus optio reprehenderit consequuntur modi libero dolore voluptate similique, illum quaerat. Rerum, hic, aut!"
		},
	];
	$scope.categories = [
		{
			name: "Бездомни Кучета",
			description: "description",
			image: "image",			
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt nesciunt doloremque velit laboriosam laborum, earum labore odit reprehenderit temporibus hic totam quam, ad officia voluptates mollitia. At, officia minus expedita?"
		},
		{
			name: "Проблем 2",
			description: "description",
			image: "image",			
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias totam vero, sapiente alias autem neque ipsam possimus optio reprehenderit consequuntur modi libero dolore voluptate similique, illum quaerat. Rerum, hic, aut!"
		},
		{
			name: "Проблем 3",
			description: "description",
			image: "image",
			text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid eveniet, nihil aut soluta laudantium. Obcaecati illo, at iste facere vel, cupiditate dolorum. Esse quas deserunt labore possimus eligendi eveniet debitis."			
		},
		{
			name: "Проблематика на Проблемите",
			description: "description",
			image: "image",			
			text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa nesciunt, distinctio totam eum alias earum impedit? Quaerat eos soluta suscipit molestias autem nam dolorum iusto vitae dolore aliquam, deserunt fuga!"
		},
		{
			name: "Улични Проблеми",
			description: "description",
			image: "image",		
			text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa nesciunt, distinctio totam eum alias earum impedit? Quaerat eos soluta suscipit molestias autem nam dolorum iusto vitae dolore aliquam, deserunt fuga!"	
		}
	];

	$scope.toggleLoginForm = function(){
		$scope.loginEnabled = !$scope.loginEnabled;
	};
	$scope.toggleRegisterForm = function(){
		$scope.registerEnabled = !$scope.registerEnabled;

	};
	
	function getasd(){
		return $.ajax({
			url: 'http://localhost:5475/api/Institution',
			type: 'GET',
			});
	};
	var promise = getasd();
	promise.success(function (data) {
	$scope.institutions = data;
	$scope.$apply();
	console.log($scope.institutions);
	})
		
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
		console.log($scope);
		authService.register(userData).success(function(result){
			sessionStorage["Authorization"] = "Bearer " + result.token;
			console.log(result);
		}).error(function(result){
			alert(result);
		});
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

}]);
