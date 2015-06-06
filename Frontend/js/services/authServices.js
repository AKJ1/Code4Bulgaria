app.factory('authService',
    function ($http) {
	var baseServiceUrl = 'http://localhost:5475/';
	
        return {
            login: function(userData) {

                 return $http.post(baseServiceUrl + 'token', userData);
            },

            register: function(userData) {
                return $http.post('http://localhost:5475/api/Account/Register', userData)
            },

            logout: function() {
                delete sessionStorage['currentUser'];
				var request = {
			   method:'GET',
			   url: baseServiceUrl + '/api/Account/Logout'
			   };
			   $http(request).success(function(data) {
                    success(data);
                }).error(error);
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