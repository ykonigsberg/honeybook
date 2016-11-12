angular.module('myApp').directive('contactItem', function() {
    return {
        restrict: 'E',
        scope: {
            'contactData': '='
        },
        templateUrl: 'directives/contact_item/contact_item.html'
    };
});