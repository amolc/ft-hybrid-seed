
angular.module('samosa', ['ionic', 'ngSanitize','angular-carousel'])
	

    .config(function ($stateProvider, $urlRouterProvider) {	
        $stateProvider
			.state('State', {
				url: '/State',
				templateUrl: 'templates/state.html'
			})
			.state('Municipality', {
				url: '/Municipality/:param',
				templateUrl: 'templates/municipality.html'
			})
			.state('Login', {
				url: '/Login/:name',
				templateUrl: 'templates/login.html'
			})
				.state('Newsfeed', {
				url: '/Newsfeed/:name',
				templateUrl: 'templates/news_feed.html'
			})

			.state('Housing', {
				url: '/Housing/:id',
				templateUrl: 'templates/housingass.html'
			});
			
            
        $urlRouterProvider.otherwise('/State');

    });