function housingAssController($rootScope,$scope, $location, $http) {
	 $scope.adminusername=loginuser;
     $rootScope.items = [];
		$scope.hous={
		 h_name :'',
		 m_ID :'',
		 address:'',
		 bPass:''
	};
	$scope.selectedItem='false';
		$http.get(baseURL + 'allHousingAss').success(function(res) {
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
			
			
			//for getting state and their d to insert in add municipality
			
			 $http.get(baseURL + 'munplicitylist').success(function(res) {
				 $scope.response = res;
				 console.log(res);
				 if (res.status == 'false') {
					 alert(res.message);
				 } else {
					 $scope.states=res;
					 $rootScope.municipalitylist=res;
				 }
			 }).error(function() {
			 alert("Please check your internet connection or data source..");
			});
			
			$scope.del=function(id){
			$http.get(baseURL + 'deleteHousingAss/'+id).success(function(res) {
				$scope.response = res;
				if (res.status == false) {
					alert(res.message);
				}else {
					alert(res.message);
					alert('hiiiii');
					$location.path('/HousingAssociation');			
				}
			
			}).error(function() {
				alert("Please check your internet connection or data source..");
			});
				
			};
			
			$scope.AddHousingAss=function(){
			$scope.hous.m_ID=$scope.selectedItem.m_id;
			if ($scope.hous.h_name == '') {
			alert('Enter a Housing Association Name ');
		    } else if($scope.hous.m_ID == null){
		    alert('select state name ');
		  }
		    else if($scope.hous.address == ''){
		    alert('enter address ');
		} else if($scope.hous.bPass == ''){
		    alert('enter building password');
	 }	  else {  
			 $http.post(baseURL + 'addHousingAss',$scope.hous).success(function(res) {
				 $scope.response = res;
				 console.log(res);
				 if (res.status == false) {
					 alert(res.message);
				 } else {
					 alert(res.message);
					console.log($location.path("/HousingAssociation"));
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
				$location.path('/Viewhousingass/'+id);	
			};
			  $scope.showhide = function(id){
	if(document.getElementById(id).style.display == 'none'){
    document.getElementById(id).style.display = 'block';
   }else{
   	document.getElementById(id).style.display = 'none';
   }
   };
	
}

function adminedithousController($rootScope,$scope, $location, $http,$routeParams) {
	    $scope.adminusername=loginuser;
        $scope.selectedItem=false;
		var id=$routeParams.id;				
			 $http.get(baseURL + 'getAssdetail/'+id).success(function(res) {
				 $scope.response = res;
				 $scope.assdetail=res;
			 }).error(function() {
				 alert("Please check your internet connection or data source.. xxx");
			 });

		$scope.edithou=function(mundetail){
			mundetail.stateID=$scope.selectedItem.state_id;
			alert(mundetail.m_name);
			alert(mundetail.stateID);
			alert('m id ='+mundetail.m_id);
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