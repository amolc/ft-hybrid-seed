function loginController($rootScope,$scope, $location, $http, $stateParams,$ionicLoading) {
	
	$scope.show = function() {
	  $scope.loading = $ionicLoading.show({
	       content: 'Loading',
	       animation: 'fade-in',
	       showBackdrop: true,
	       maxWidth: 200,
	       showDelay: 2000
	     });
	 };
   $scope.hide = function(){
     $scope.loading.hide();
   };
	
	var hName=$stateParams.name;
	$scope.user = {
		username :hName,
		buildingpass : ''
	};
	
	$scope.login = function(user) {
		if (user.buildingpass == '') {
			alert('Password required ');
		}  else {	       
			$scope.show();
			$http.post(baseURL + 'login', user).success(function(res) {
				$scope.response = res;
				console.log(res);
				if (res.status == 'false') {
					alert(res.message);
				} else {
					$location.path("/Newsfeed/"+hName);
				}
				$scope.hide();
			}).error(function() {
				$scope.hide();
				alert("Please check your internet connection or data source..");
			});
		}
	};
}
function newsFeedController($rootScope,$scope, $location, $http, $stateParams) {
		$scope.hName=$stateParams.name;
		
}