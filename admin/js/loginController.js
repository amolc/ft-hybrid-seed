function loginController($rootScope,$scope, $location, $http, $routeParams) {
	alert('inside the controller');
	var hName=$scope.housingass.housing_ass_name;
	alert('hiiiiii'.hName);
	$scope.user = {
		username : '',
		buildingpass : ''
	};
	$scope.login = function(user) {
		if (user.username == '') {
			alert('Enter valid User Name ');
		}  else {		       
			$http.post(baseURL + 'login', user).success(function(res) {
				$scope.response = res;
				console.log(res);
				if (res.status == 'false') {
					alert(res.message);
				} else {
					alert(res.message);
					//$location.path("/Cart");
				}
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
		}
	};
}