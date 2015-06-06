app.factory('keyphraseService',
    function ($http) {
	var baseServiceUrl = '';
        return {
		getKeyphrases:  function(){
			var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/Keyphrase',
                };
                 $http(request).success(function(data) {
                 success(data);
                }).error(error);
			}
			
			getKeyphraseById:  function(id){
			var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/Keyphrase/' +  id,
                };
                 $http(request).success(function(data) {
                 success(data);
                }).error(error);
			}
			
		}
	}
});