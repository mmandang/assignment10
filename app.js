var demoApp = angular.module('demoApp', []);

demoApp.config(function ($routeProvider) {
	$routeProvider
		.when('/',{
				controller: 'SimpleController',
				templateUrl: 'View.html'
			})
		.otherwise({ redirectTo: '/' });
		
});

demoApp.controller('SimpleController', function ($scope) {
 	$scope.comments = [
 	     'This is the first comment!',
         'Heres the second one!',
         'And this is one more.',
         'Here is another one!'

 	];

 	$scope.addComment = function() {
		$scope.comments.push($scope.newComment.dt);
	};

});