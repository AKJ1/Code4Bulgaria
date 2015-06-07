app.factory('signalService',
    function ($http) {
	var baseServiceUrl = 'http://localhost:5475/';
        return {
		createSignal:  function(signalData){
		return $.ajax({
				method: 'POST',
				url: 'http://localhost:5475/api/Signal/Create',
				headers: {
					'Authorization':sessionStorage["Authorization"],
					'Content-Type':'application/json',
				},
				dataType: 'json',
				data: signalData,
				success: function(data){
					console.log('succes: '+data);
				},
				error: function(data){console.log(data)}
			});
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