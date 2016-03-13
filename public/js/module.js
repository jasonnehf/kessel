'use strict';

var app=angular.module('kesselApp',['ui.router']);

// app.run(function() {
// 	console.log("app.run!");
// })

app.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
// 	.state(stateName), configObj)
		.state('home', {url:'/', templateUrl:'/html/home.html'})
		.state('about', {url:'/about', templateUrl:'/html/about.html', controller:"aboutCtrl"})
		.state("list", {url:'/list/:p', templateUrl	:'/html/listPeople.html', controller:"listCtrl"})
		.state("person", {url:'/person/:person', templateUrl :'/html/person.html', controller:"personCtrl"})


	$urlRouterProvider.otherwise('/');
});

app.run(function(ListFactory) {
	ListFactory.fetchList();
});