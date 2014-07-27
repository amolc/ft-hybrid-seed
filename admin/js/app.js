'use strict';

angular.module('myApp', [
    'ngTouch',
    'ngRoute',
    'ngAnimate',
    'myApp.controllers',
    'myApp.memoryServices'
]).
config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/State', {templateUrl: 'partials/state.html'});
	$routeProvider.when('/Adminstate', {templateUrl: 'partials/super_admin/state.html'});
	$routeProvider.when('/Addstate', {templateUrl: 'partials/super_admin/addState.html'});
	$routeProvider.when('/Viewstate/:id', {templateUrl: 'partials/super_admin/viewstate.html'});
	$routeProvider.when('/Viewmunicipality/:id', {templateUrl: 'partials/super_admin/viewmunicipality.html'});
	$routeProvider.when('/Viewhousingass/:id', {templateUrl: 'partials/super_admin/viewhousigass.html'});
	
	$routeProvider.when('/Adminmunicipality', {templateUrl: 'partials/super_admin/adminMunicipality.html'});
	$routeProvider.when('/Addmunicipality', {templateUrl: 'partials/super_admin/addmunicipality.html'});
	$routeProvider.when('/AddHousingAss', {templateUrl: 'partials/super_admin/addhousingass.html'});
	
	$routeProvider.when('/Admin', {templateUrl: 'partials/super_admin/admin.html'});
	$routeProvider.when('/Testlogin', {templateUrl: 'partials/super_admin/testlogin.html'});
	$routeProvider.when('/Editstate/:id', {templateUrl: 'partials/super_admin/editstate.html'});
	$routeProvider.when('/Editmunicipality/:id', {templateUrl: 'partials/super_admin/editmunicipality.html'});
	$routeProvider.when('/HousingAssociation', {templateUrl: 'partials/super_admin/housingAssociation.html'});
	$routeProvider.when('/Adminlogin', {templateUrl: 'partials/super_admin/adminlogin.html'});
    $routeProvider.when('/employees', {templateUrl: 'partials/employee-list.html', controller: 'EmployeeListCtrl'});
    $routeProvider.when('/employees/:employeeId', {templateUrl: 'partials/employee-detail.html', controller: 'EmployeeDetailCtrl'});
    $routeProvider.when('/employees/:employeeId/reports', {templateUrl: 'partials/report-list.html', controller: 'ReportListCtrl'});
    $routeProvider.otherwise({redirectTo: '/Adminlogin'});
    $routeProvider.when('/Municipality/:id', {templateUrl: 'partials/municipality.html'});
    $routeProvider.when('/Housing/:id', {templateUrl: 'partials/housingass.html'});
    $routeProvider.when('/Login', {templateUrl: 'partials/login.html',controller: 'loginController'});
}]);