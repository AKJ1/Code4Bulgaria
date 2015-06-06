app.factory('authService',
    function ($http) {
	var baseServiceUrl = 'http://localhost:5475/';
	
        return {
            login: function(userData) {
				return $.post('http://localhost:5475/api/token',userData,
				function(data, status){
					alert("Data: " + data + "\nStatus: " + status);
				});
            },

            register: function(userData) {
				return $.post('http://localhost:5475/api/Account/Register',userData,
				function(data, status){
					alert("Data: " + data + "\nStatus: " + status);
				});
                //return $http.post('http://localhost:5475/api/Account/Register', userData)
            },

            logout: function() {

				return $.post('http://localhost:5475/api/Account/Logout',userData,
				function(data, status){
					alert("Data: " + data + "\nStatus: " + status); 
				});
            },

            getCurrentUser : function() {
               var request = {
			   method:'GET',
			   url: baseServiceUrl + '/api/Account/UserInfo'
			   };
			   $http(request);
            },

            getAuthHeaders : function() {
                var headers = {};
                var currentUser = this.getCurrentUser();
                if (currentUser) {
                    headers['Authorization'] = 'Bearer ' + currentUser.access_token;
                }
                return headers;
            },
			
			externalLogin : function(){
				 var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/Account/ExternalLogin',
                    data: userData
                };
                $http(request).success(function(data) {
                    success(data);
                }).error(error);
			}
        };
    }
);