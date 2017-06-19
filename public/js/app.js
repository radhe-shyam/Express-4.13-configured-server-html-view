angular.module('app', [
	'ui.router'
	])
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('home', {
		url: '/home',
		templateUrl: '/partials/home.html',
		controller: 'homeController'
	})
    .state('shipment', {
        url: '/contact',
        templateUrl: '/partials/contact.html',
        controller: 'contactController'
    });
    
    $urlRouterProvider.otherwise('home');
}]);