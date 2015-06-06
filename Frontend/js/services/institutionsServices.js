app.factory('insitutionsService',
    function ($http) {
	var baseServiceUrl = 'http://localhost:5475/';
        return {
		getIntitutions:  function(){
			var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/Institution',
                };
                 $http(request).success(function(data) {
                 success(data);
                }).error(error);
			},
			
			getInstitutionById:  function(id){
			var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/Institution/' +  id,
                };
                 $http(request).success(function(data) {
                 success(data);
                }).error(error);
			},
			
			getInstitutionByKeyword:  function(keyword){
			var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/Institution/' + keyword,
                };
                 $http(request).success(function(data) {
                 success(data);
                }).error(error);
			}
		}
});