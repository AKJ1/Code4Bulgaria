app.controller('HomeController', ['$scope', '$rootScope', 'insitutionsService', function($scope, $rootScope, insitutionsService){
	$scope.isAuthenticated = function(){
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
});
console.log($scope.institutions);
}]);
