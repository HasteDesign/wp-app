wpApp.controller('DashCtrl', function($scope, $http) {
	$http.get('http://127.0.0.1/Web/side/allysonsouza/wp-json/posts?type=conteudo-didatico')
	.success( function(data) {
		$scope.title = 'Palestras WordCamp São Paulo 2015';
		$scope.posts = data;
	})
})

