angular.module('myApp').service('contactService', function($http) {
    this.http_ = $http;
    this.pathPrefix = 'https://candidate-test.herokuapp.com';

	this.getContactList = function() {
        return this.http_ .get(this.pathPrefix + '/contacts');
    };
});
