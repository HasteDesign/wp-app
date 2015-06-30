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


wpApp.filter('formatHour', function() {
		return function(meta) {
			if( meta !== undefined ) {
				var date = new Date( meta * 1000 );
				var options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' };
				//return date.toLocaleDateString('pt-BR', options);
				return date.getUTCHours() + 'h' + date.getUTCMinutes();
				//return date.toLocaleTimeString('pt-BR', { hour12: false });
			}
		}
});

wpApp.filter('formatDate', function() {
		return function(meta) {
			if( meta !== undefined ) {
				var date = new Date( meta * 1000 );
				var options = { year: 'numeric', month: 'numeric', day: 'numeric' };
				return date.toLocaleDateString('pt-BR', options);
				//return date.getUTCHours() + 'h' + date.getUTCMinutes();
				//return date.toLocaleTimeString('pt-BR', { hour12: false });
			}
		}
});
