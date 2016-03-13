'use strict';

var app=angular.module('kesselApp');

app.controller('listCtrl',function($scope,$state,ListFactory){
	// console.log("listCtrl!");
	var page=parseInt($state.params.p) || 1;
	$scope.page=page;
	ListFactory.fetchList(page);
	$scope.$watch(function() {
		return ListFactory.pages[page];
	}, function(currentList,prevList) {
		$scope.list=currentList;
	});

	$scope.doThing = function(thing) {
		console.log(thing);
	}

	$scope.$watch(function () {
		return ListFactory.pageNumbers;
	}, function() {
		$scope.pageNumbers=ListFactory.pageNumbers;
		console.log("pageNumbers: ",$scope.pageNumbers);
	});

});

app.controller('aboutCtrl', function($scope, $state) {
	console.log("aboutCtrl Loading");

	$scope.goHome=function() {
		console.log("go home!");

		console.log("$state: ",$state);
		$state.go('home');
	}

	$scope.goToPerson = function(param) {
		$state.go('person',{person:param.toString()});
	}


});


app.controller('personCtrl', function($scope, $state, $stateParams, PersonFactory) {
	console.log("state: ", $state);
	console.log("stateParams: ", $stateParams);
	var person=parseInt($state.params.person) || 1;
	PersonFactory.fetchPerson($stateParams.person);
	$scope.$watch(function() {
		return PersonFactory.person[$stateParams.person];
	}, function(currentPerson,prevPerson) {
		$scope.person=currentPerson;
		console.log("$scope: ",$scope)
	});

	$scope.goToPerson = function(p){
		var splits=p.url.split('/');
		console.log(p);
		$state.go('person',{person:param.toString()});
	}
})