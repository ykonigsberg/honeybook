'use strict';

angular.module('contactList', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'contact_list/contact_list.html',
    controller: 'ContactListCtrl'
  });
}])

.controller('ContactListCtrl', ['$scope', 'contactService',
    function($scope, contactService) {

  $scope.contacts = [];
  $scope.isContactsLoaded = false;

  $scope.searchString = '';

  this.loadContactList = function() {
    contactService.getContactList()
        .success(function(data) {
          $scope.contacts = data;
          $scope.isContactsLoaded = true;
          console.log("success");
        }).error(function(data, status) {
          console.error('error', status, data);
        }).finally(function() {
          console.log("finished");
        });
  };
  this.loadContactList();
}]);