app.controller('formController', ['$scope',  function($scope)
{
	$scope.enabledFields = {
		SignalData: false,
		Images: false,
		Address: false,
		City: false,		
		Geolocation: false,
		Content: true
	}
	$scope.fieldData = {}

	$rootScope.$on('selectedInstitutionChange', function(event, institution){
		$scope.updateRequiredFields(institution.fields);
	})
	$scope.updateRequiredFields = function(fields){
		if (enabledField[field.Key] !== null) {
			enabledField[field.Key] = field.Value;
		};
	}

	$scope.addFormElement = function(fieldName){
		if (enabledField[fieldName] != null) {
			enabledField[fieldName] = true;
		};
	}

	$scope.removeFormElement = function(fieldName){
		if (enabledField[fieldName] != null) {
			enabledField[fieldName] = false;
		};
	}

	$scope.serializeFormData = function(){
		var json = {};
		for(var field in enabledFields){
			if (enabledFields[field]) {
				json[field] = fieldData[field];
			};
		}
		return json;
	}
}])