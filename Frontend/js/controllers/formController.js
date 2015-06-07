app.controller('formController', ['$scope', '$rootScope', 'signalService', function($scope, $rootScope, signalService)
{
	$scope.enabledFields = {
		data: false,
		images: false,
		address: false,
		city: false,		
		geolocation: false,
		content: true,
		files: false,
		phone: false,
		description: false,
		plead: false,
		middleName: true,
		name: true,

	};
	$scope.fieldData = {};

	$scope.inputMenuVisible = false;
	$rootScope.$on('selectedInstitutionChange', function(event, institution){
		$scope.updateRequiredFields(institution.fields);
	});
	$scope.updateRequiredFields = function(fields){
		if (enabledFields[field.Key] !== null) {
			enabledFields[field.Key] = field.Value;
		}
	};

	$scope.addFormElement = function(fieldName){
		$scope.toggleMenu();
			$scope.enabledFields[fieldName] = true;
	};

	$scope.removeFormElement = function(fieldName){
		if ($scope.enabledFields[fieldName] == true) {
			$scope.enabledFields[fieldName] = false;
		}
	};

	$scope.serializeFormData = function(){
		var json = {};
		for(var field in enabledFields){
			if ($scope.enabledFields[field]) {
				json[field] = fieldData[field];
			}
		}
		return json;
	};
	$scope.toggleMenu = function(){
		$scope.inputMenuVisible = !$scope.inputMenuVisible;
	};
	
	$scope.sendSignal = function(){
		var signal = {
			Description : $scope.signal.text,
			Text: $scope.signalSummary,
		}
		signalService.createSignal(signal);
	}
}]);