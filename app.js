(function(){
	'use strict';

	angular
		.module('app', [
			'ngAnimate',
			'ngRoute'
		])
	.controller('appController', function($scope){
		$scope.toggle = toggle;
		$scope.add = add;
		$scope.remove = remove;
		$scope.items = [];

		function remove(index){
			$scope.items.splice(index,1);
		}

		function add(){
			$scope.items.push( $scope.newitem );
			$scope.newitem = '';
		}

		function toggle(){
			$scope.closed = !$scope.closed;
		}
	})
	.config(function($routeProvider){
		$routeProvider
		.when('/', {
			template : 'test'
		})
		.when('/testing', {
			template : 'testing'
		});
	});

})();