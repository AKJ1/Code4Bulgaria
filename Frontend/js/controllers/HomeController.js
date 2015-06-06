app.controller('homeController', ['$scope', 'insitutionsService', function($scope, insitutionsService, $location){
	$scope.institutions = insitutionsService.getIntitutions();
}]);
	