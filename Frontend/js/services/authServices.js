app.factory('authService',
    function ($http) {
	var baseServiceUrl = '';
        return {
            login: function(userData) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/user/login',
                    data: userData
                };
                 $http(request).success(function(data) {
                 success(data);
                }).error(error);
            },

            register: function(userData, success, error) {
                var request = {
                    method: 'POST',
                    url: baseServiceUrl + '/api/user/register',
                    data: userData
                };
                $http(request).success(function(data) {
                    success(data);
                }).error(error);
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
        }
    }
);