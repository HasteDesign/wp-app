wpApp.controller('DashCtrl', function($scope, $http) {
	$http.get('https://saopaulo.wordcamp.org/2014/wp-json/posts?type=wcb_session&filter[posts_per_page]=-1/')
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


wpApp.filter('formatDate', function() {
		return function(text) {
			var date = new Date(text);
			var options = { year: 'numeric', month: 'numeric', day: 'numeric' };
			return date.toLocaleDateString('pt-BR', options);
		}
});
