
function stateController($rootScope,$scope, $location, $http ,$ionicLoading) {
	
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
   
	$scope.states = {};
	$scope.muncp= {};
	$scope.show();
		$http.get(baseURL + 'state').success(function(res) {
			
				$scope.response = res;
				console.log(res);
				if (res.status == 'false') {
					alert(res.message);
				} else {
					console.log(res);
					$scope.states=res;	
				}
				 $scope.hide();
			
			}).error(function() {
				$scope.hide();
				alert("Please check your internet connection or data source..");
			});
			$scope.mun=function(id){
				$location.path('/Municipality/'+id);	
			};
			
}