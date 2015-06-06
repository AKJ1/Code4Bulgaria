app.factory('signalService',
    function ($http) {
	var baseServiceUrl = 'http://localhost:5475/';
        return {
		createSignal:  function(data){
			var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/Signal/Create',
                    data: userData
                };
                 $http(request).success(function(data) {
                 success(data);
                }).error(error);
			},
		
		resolveSignal:  function(){
			var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/Signal/Resolve/{id}',
                };
                 $http(request).success(function(data) {
                 success(data);
                }).error(error);
			},
		
		mySignals:  function(data){
			var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/Signal/My',
                };
                 $http(request).success(function(data) {
                 success(data);
                }).error(error);
			},
		
		getSignal:  function(id){
			var request = {
                    method: 'GET',
                    url: baseServiceUrl + '/api/Signal/' + id,
                };
                 $http(request).success(function(data) {
                 success(data);
                }).error(error);
			}
		}
	});