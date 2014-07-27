function adminstateController($rootScope,$scope, $location, $http) {
    $rootScope.stateForMun;
    $scope.adminusername=loginuser;
	$scope.states = {};
	$scope.state={
		 statename :'',
		 statelocation :''
	};
		$http.get(baseURL + 'state').success(function(res) {
				$scope.response = res;
				console.log(res);
				if (res.status == 'false') {
					alert(res.message);
				} else {
					$scope.states=res;
					$rootScope.stateForMun=res;
				}
			
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
			$scope.del=function(id){
			$http.get(baseURL + 'deleteState/'+id).success(function(res) {
				$scope.response = res;
				if (res.status == false) {
					alert(res.message);
				} else {
					//alert(res.message);
					$location.path('/Admin');
				}
			
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
				
			};
			
			$scope.addState=function(state){
				console.log(state);
			if (state.statename == '') {
			alert('Enter a state Name ');
		} else if(state.statelocation == ''){
		    alert('Enter state location  ');
		} else {		      
			$http.post(baseURL + 'addState', state).success(function(res) {
				$scope.response = res;
				console.log(res);
				if (res.status == false) {
					alert(res.message);
				} else {
					alert(res.message);
					$location.path("/Admin");
				}
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
		}
		};
			
			$scope.goto=function(page){
				$location.path(page);	
			};
			
			$scope.edit=function(id){
				$location.path('/Editstate/'+id);	
			};
			
			$scope.statedata=function(id){
				$location.path('/Viewstate/'+id);	
			};
			
			// $scope.viewdata=function(id){
				// alert("new");
// 				
		// $location.path('/Viewstate/'+id);	
			// };
			  $scope.showhide = function(id){
	if(document.getElementById(id).style.display == 'none'){
    document.getElementById(id).style.display = 'block';
   }else{
   	document.getElementById(id).style.display = 'none';
   }
   };
	
}
function admineditstateController($rootScope,$scope, $location, $http,$routeParams) {
	 $scope.adminusername=loginuser;
	$scope.statedetail={		
	};
		var id=$routeParams.id;				
			 $http.get(baseURL + 'getdetail/'+id).success(function(res) {
			 	console.log(res);
				 $scope.response = res;
				 $scope.statedetail=res;
			 }).error(function() {
				 alert("Please check your internet connection or data source..");
			 });
			 
			 	$scope.editState=function(statedetail){
			if (statedetail.state_name == '') {
			alert('Enter a state Name ');
		} else if(statedetail.state_location == ''){
		    alert('Enter state location  ');
		} else {		      
			$http.post(baseURL + 'updateState', statedetail).success(function(res) {
				$scope.response = res;
				console.log(res);
				if (res.status == false) {
					alert(res.message);
				} else {
					$location.path("/Admin");
				}
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
		}
		};
		$scope.goto=function(page){
				$location.path(page);	
			};
  $scope.showhide = function(id){
	if(document.getElementById(id).style.display == 'none'){
    document.getElementById(id).style.display = 'block';
   }else{
   	document.getElementById(id).style.display = 'none';
   }
   };
   
}
