
function stateController($rootScope,$scope, $location, $http) {
	$scope.states = {};
	$scope.muncp= {};
		$http.get(baseURL + 'state').success(function(res) {
				$scope.response = res;
				console.log(res);
				if (res.status == 'false') {
					alert(res.message);
				} else {
					console.log(res);
					$scope.states=res;
					
				}
			
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
			
}