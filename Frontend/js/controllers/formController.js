app.controller('formController', ['$scope', '$rootScope', 'signalService', function($scope, $rootScope, signalService)
{
	$scope.enabledFields = {
		SignalData: false,
		Images: false,
		Address: false,
		City: false,		
		Geolocation: false,
		Content: true,
		Files: false
	};
	$scope.fieldData = {};

	$scope.inputMenuVisible = false;
	$rootScope.$on('selectedInstitutionChange', function(event, institution){
		$scope.updateRequiredFields(institution.fields);
	});
	$scope.updateRequiredFields = function(fields){
		if (enabledField[field.Key] !== null) {
			enabledField[field.Key] = field.Value;
		}
	};

	$scope.addFormElement = function(fieldName){
		$scope.toggleMenu();
		if (enabledField[fieldName] != null) {
			enabledField[fieldName] = true;
		}
	};

	$scope.removeFormElement = function(fieldName){
		if (enabledField[fieldName] != null) {
			enabledField[fieldName] = false;
		}
	};

	$scope.serializeFormData = function(){
		var json = {};
		for(var field in enabledFields){
			if (enabledFields[field]) {
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