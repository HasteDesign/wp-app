wpApp.controller('DashCtrl', function($scope, $http) {
	$http.get('https://saopaulo.wordcamp.org/2014/wp-json/posts?type=wcb_session&filter[posts_per_page]=-1/')
	.success( function(data) {
		$scope.title = 'Palestras WordCamp São Paulo 2015';
		$scope.posts = data;
	})

	$scope.togglePost = function(post) {
		if( $scope.isRegularSession(post) ) {
			if ($scope.isPostShown(post)) {
				$scope.shownpost = null;
			} else {
				$scope.shownpost = post;
			}
		}
	};

	$scope.isPostShown = function(post) {
		return $scope.shownpost === post;
	};

	$scope.sessionClass = function(post) {
		var active = $scope.isPostShown(post);
		active ? active = 'active ' : active = '';

		switch(post.title) {
			case 'Credenciamento' : return active + 'credenciamento';
			break;
			case 'Abertura' : return active + 'abertura';
			break
			case 'Almoço' : return active + 'almoco';
			break;
			case 'Coffee Break' : return active +'coffee';
			break;
			case 'Encerramento' : return active + 'encerramento'
			break;
			case 'WordCana' : return active + 'wordcana'
			break;
			default : return '';
			break;
		}
	};

	$scope.isRegularSession = function(post) {
		if( post.post_meta[1]["value"] === 'session' ) {
			return true;
		} else {
			return false;
		}
	};

	$scope.showTrack = function(post, returnValue) {
		var local = '';
		var trilha= '';

		for( var i = 0; i < post.terms.wcb_track.length; i++  ) {
			if( post.terms.wcb_track[i].slug == 'auditorio' || post.terms.wcb_track[i].slug == 'mini-auditorio') {
				local = post.terms.wcb_track[i].name;
			} else {
				trilha = post.terms.wcb_track[i].name;
			}
		}

		if( returnValue == 'local' ) { return local; };
		if( returnValue == 'trilha' ) { return trilha; };
	}
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
