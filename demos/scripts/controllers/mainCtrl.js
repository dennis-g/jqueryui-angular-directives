angular.module('demoApp', ['jqueryui.directives'])

   .controller('mainCtrl', ['$scope', function ($scope) {

      $scope.button = {
         icons:  {
            primary:   'gear',
            secondary: 'triangle-1-s'
         },
         toggle: true
      }

      $scope.buttonset = {
         buttons: [
            {label: 'Choice 1', checked: true},
            {label: 'Choice 2'},
            {label: 'Choice 3'}
         ]
      };

   }]);