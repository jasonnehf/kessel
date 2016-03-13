'use strict';

var app = angular.module('kesselApp');

app.service('ListFactory', function($http){
	this.pages=[];
	this.fetchList = (page) => {
		page = page || 1;
		if(!this.pages[page]) {
			$http.get(`//swapi.co/api/people/?page=${page}`)
			.then( res => {
				if(!this.count) {
					this.count=res.data.count;
					this.totalPages=Math.ceil(this.count/10);
					this.pageNumbers=Array(this.totalPages).fill(1).map((e,i)=>i+1);
				}
				this.pages[page]=res.data.results;

			}, err=> {
				console.log("ListFactory error!", err);
			});
		}
	}
});

app.service('PersonFactory', function($http){
	this.person=[];
	this.fetchPerson = (personID) => {
		personID = personID || 1;
		if(!this.person[personID]) {
			$http.get(`//swapi.co/api/people/${personID}`)
			.then( res => {
				this.person[personID]=res.data;

			}, err=> {
				console.log("PersonFactory error!", err);
			});
		}
	}
});