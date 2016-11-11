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

  /**
   * Array of contacts.
   * @type {Array<Object>}
   */
  $scope.contacts = [];

  /**
   * Flag for data response status.
   * @type {boolean}
   */
  $scope.isDataReady = false;

  /**
   * Contacts search string
   * @type {string}
   */
  $scope.searchString = '';

  /**
   * Set the contacts data.
   */
  this.setContactList = function() {
    contactService.getContactList()
        .success(function(data) {
          $scope.contacts = data;
          $scope.isDataReady = true;
          console.log("success");
        }).error(function(data, status) {
          console.error('error', status, data);
        }).finally(function() {
          console.log("finished");
        });
  };

  this.setContactList();
}]);
















