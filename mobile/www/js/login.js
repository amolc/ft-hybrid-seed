function logincontroller($rootScope,$scope, $location, $http, $routeParams) {
		//$scope.housingass= {};
	$scope.user = {
		username : '',
		password : ''
	};
	$scope.login = function(user) {
		if (user.username == '') {
			alert('Enter valid User Name ');
		} else if (user.password == '') {
			alert('Enter valid Password ');
		} else {
			$scope.show();
			$http.post(baseURL + 'loginsignup', user).success(function(res) {
				$scope.response = res;
				console.log(res);
				if (res.status == 'false') {
					alert(res.message);
				} else {
					$rootScope.userIdInfo=res.user_id;
					email=res.user_email;
					isAlreadyLogin ='true';
					//$scope.insertUserIfnoIndb(res);
					$location.path("/Cart");
				}
				$scope.hide();
			}).error(function() {
				$scope.hide();
				alert("Please check your internet connection or data source..");
			});
		}
	};
 // };
}