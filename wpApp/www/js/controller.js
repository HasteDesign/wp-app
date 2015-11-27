wpApp.controller('DashCtrl', function($scope, $http) {
	$http.get('https://saopaulo.wordcamp.org/2014/wp-json/posts?type=wcb_session&filter[posts_per_page]=-1/')
	.success( function(data) {
		$scope.title = 'Palestras';
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
		var classes = '';
		var active = $scope.isPostShown(post);
		active ? classes = 'active ' : null ;
		classes += $scope.trackClasses(post) + ' ';

		var breakClasses = 'item-stable';
		var procedureClasses = 'item-stable';

		switch(post.title) {
			case 'Credenciamento' : return classes + procedureClasses;
			break;
			case 'Abertura' : return classes + procedureClasses;
			break
			case 'Almoço' : return classes + breakClasses;
			break;
			case 'Coffee Break' : return classes + breakClasses;
			break;
			case 'Encerramento' : return classes + procedureClasses;
			break;
			case 'WordCana' : return classes + breakClasses;
			break;
			default : return classes + 'item-light';
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

	$scope.trackClasses = function(post) {
		var classes = '';

		for( var i = 0; i < post.terms.wcb_track.length; i++  ) {
			classes +=  ' ' + post.terms.wcb_track[i].slug;
		}

		return classes;
	}

	$scope.scheduleSession = function(post) {
		cordova.plugins.notification.local.isPresent(post.ID, function (present) {
			if( present ) {
				cordova.plugins.notification.local.cancel(post.ID, function() {
				});
			} else {
				cordova.plugins.notification.local.schedule({
					id: post.ID,
					title: post.title,
					text: "Irá acontecer agora a palestra: " + post.title + " - com " + post.author.name,
					at: new Date( "July 04, 2015 00:28:00" )
				});
				return;
			}
		});
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
