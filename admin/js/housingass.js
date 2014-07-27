function housingcontroller($rootScope,$scope, $location, $http, $routeParams) {
		$scope.housingass= {};
	$scope.stateid= $routeParams.id;
	 	id =$scope.stateid;
      $http.get(baseURL + 'housingAssociation/'+id).success(function(res) {
				$scope.response = res;
				console.log(res);
				if (res.status == 'false') {
					alert(res.message);
				} else {
					console.log(res);
					$scope.housingass=res;					
				}				
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
			$scope.goto=function(){
	
$location.path("/Login");
};

}
