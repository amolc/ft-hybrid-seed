function municipalitycontroller($rootScope,$scope, $location, $http,$stateParams,$ionicLoading) {
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
	$scope.muncp= {};
	$scope.stateid= $stateParams.param;
	 	var id =$scope.stateid;
	 	$scope.show();
      $http.get(baseURL + 'municipality/'+id).success(function(res) {
				$scope.response = res;
				console.log(res);
				if (res.status == 'false') {
					alert(res.message);
				} else {
					$scope.muncp=res;
					console.log();					
				}
				$scope.hide();
			}).error(function() {
				$scope.hide();
				alert("Please check your internet connection or data source..");
			});
			
			$scope.assoc=function(id){
				$location.path('/Housing/'+id);	
			};
}