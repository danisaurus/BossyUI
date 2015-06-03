angular.module('bossy.alert', []){
	.run(function($templateCache){
        $templateCache.put('bossy-calendar.html', 'templates/bossy-calendar.html');
    })
    .controller('AlertController', ['$scope', function ($scope) {



    }]).directive('bossyAlert', [function () {
		return {
			restrict: 'AE',
			scope: {
				config: '='
			},
			templateUrl:$templateCache.get('templates/bossy.calendar.html'),//'templates/bossy.calendar.html'
			controller: 'CalendarController'
		};
	}]);


}