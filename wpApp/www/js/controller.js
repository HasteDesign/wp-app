wpApp.controller('DashCtrl', function($scope, $http) {
	$http.get('http://127.0.0.1/Workspace/side/wpapp/wordpress/wp-json/posts')
	.success( function(data) {
		$scope.title = 'Palestras WordCamp São Paulo 2015';
		$scope.posts = data;
	})
})
