    function Controller($scope, $rootScope) {
    $scope.master = {};
     
    $scope.update = function(user) {
    $scope.master = angular.copy(user);
    $rootScope.wasim = $scope.master;
     
    };
    
    $scope.reset = function() {
    $scope.user = angular.copy($scope.master);
    };
     
    $scope.reset();
    }