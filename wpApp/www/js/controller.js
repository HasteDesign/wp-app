wpApp.controller('DashCtrl', function($scope, $http) {
	$http.get('http://127.0.0.1/Workspace/side/wpapp/wordpress/wp-json/posts?type=palestra&filter[posts_per_page]=-1')
	.success( function(data) {
		$scope.title = 'Palestras WordCamp São Paulo 2015';
		$scope.posts = data;
	})

	$scope.togglePost = function(post) {
		if ($scope.isPostShown(post)) {
			$scope.shownpost = null;
		} else {
			$scope.shownpost = post;
		}
	};

	$scope.isPostShown = function(post) {
		return $scope.shownpost === post;
	};
});

wpApp.filter('htmlToPlaintext', function() {
		return function(text) {
			return String(text).replace(/<[^>]+>/gm, '');
		}
});
