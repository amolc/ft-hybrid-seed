function housingcontroller($rootScope,$scope, $location, $http, $stateParams,$ionicLoading) {
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
	
		$scope.housingass= {};
		$scope.stateid= $stateParams.id;
	 	id =$scope.stateid;
	 	$scope.show();
      $http.get(baseURL + 'housingAssociation/'+id).success(function(res) {
				$scope.response = res;
				console.log(res);
				if (res.status == 'false') {
					alert(res.message);
				} else {
					console.log(res);
					$scope.housingass=res;					
				}				
				$scope.hide();
			}).error(function() {
				$scope.hide();
				alert("Please check your internet connection or data source..");
			});
			$scope.gotologin=function(name){
           $location.path('/Login/'+name);	
           };
}
