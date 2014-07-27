function adminmunicipalityController($rootScope,$scope, $location, $http) {
	 $scope.adminusername=loginuser;
     $rootScope.munitems = [];
		$scope.mun={
		 mun_name :'',
		 stateID :''
	};
	$scope.selectedItem='false';
		$http.get(baseURL + 'allmunicipality').success(function(res) {
				$scope.response = res;
				console.log(res);
				if (res.status == 'false') {
					alert(res.message);
				} else {
					console.log(res);
					$scope.municipality=res;
				}
			
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
			//for getting municipality and their id to insert in add municipality
			$http.get(baseURL + 'state').success(function(res) {
				$scope.response = res;
				console.log(res);
				if (res.status == 'false') {
					alert(res.message);
				} else {
					$scope.states=res;
					$rootScope.munitems=res;
				}
			
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
			
			$scope.del=function(id){
			$http.get(baseURL + 'deleteMunicipality/'+id).success(function(res) {
				$scope.response = res;
				if (res.status == false) {
					alert(res.message);
				} else {
					$location.path('/Adminmunicipality');					
				}
			
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
				
			};
			
			$scope.AddMunicipality=function(){
			$scope.mun.stateID=$scope.selectedItem.state_id;
			if ($scope.mun.mun_name == '') {
			alert('Enter a municipality Name ');
		} else if($scope.mun.stateID == null){
		    alert('select state name ');
		} else {  
			$http.post(baseURL + 'addMunicipality',$scope.mun).success(function(res) {
				$scope.response = res;
				console.log(res);
				if (res.status == false) {
					alert(res.message);
				} else {
					alert(res.message);
					$location.path("/Adminmunicipality");
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
				$location.path('/Editmunicipality/'+id);	
			};
			$scope.view=function(id){
				$location.path('/Viewmunicipality/'+id);	
			};
			  $scope.showhide = function(id){
	if(document.getElementById(id).style.display == 'none'){
    document.getElementById(id).style.display = 'block';
   }else{
   	document.getElementById(id).style.display = 'none';
   }
   };
	
}

function admineditmunController($rootScope,$scope, $location, $http,$routeParams) {
	    $scope.adminusername=loginuser;
        $scope.selectedItem=false;
		var id=$routeParams.id;				
			 $http.get(baseURL + 'getmundetail/'+id).success(function(res) {
				 $scope.response = res;
				 $scope.mundetail=res;
			 }).error(function() {
				 alert("Please check your internet connection or data source.. xxx");
			 });

		$scope.editmun=function(mundetail){
			mundetail.stateID=$scope.selectedItem.state_id;
			if (mundetail.m_name == '') {
			alert('Enter a municipality Name ');
		} else if(mundetail.state_id == ''){
		    alert('select a state ');
		} else {	
			console.log(mundetail);
			$http.post(baseURL + 'updateMunicipality', mundetail).success(function(res) {
				$scope.response = res;
				console.log(res);
				if (res.status == false) {
					alert(res.message);
				} else {
					$location.path("/Adminmunicipality");
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