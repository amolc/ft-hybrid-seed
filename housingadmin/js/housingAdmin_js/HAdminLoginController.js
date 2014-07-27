var loginuser="";
function adminLoginController($rootScope,$scope, $location, $http, $routeParams) {
	$rootScope.islogin=false;
	$scope.user = {
		username : '',
		password : ''
	};
	$scope.login = function(user) {
		if (user.username == '') {
			alert('Enter valid User Name ');
		} else if(user.password == ''){
		    alert('Enter password ');
		} else {		      
			$http.post(baseURL + 'HousingAdminLogin', user).success(function(res) {
				$scope.response = res;
				if (res.status == false) {
					alert(res.message);
				} else {
					loginuser=user.username;
					$rootScope= islogin=true;
					alert(res.message);
					$location.path("/Services");
				}
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
		}
	};
}

// log out controller
  

function adminLogoutController($rootScope,$scope, $location, $http, $routeParams) {
	$scope.logout=function(){
     $rootScope= islogin=false;
      $location.path('/Adminlogin');		
	};
 
}