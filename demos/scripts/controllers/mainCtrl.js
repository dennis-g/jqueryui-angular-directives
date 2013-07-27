angular.module('demoApp', ['jqueryui.directives'])

   .controller('mainCtrl', ['$scope', function ($scope) {

      $scope.button = {
         icons: {
            primary:   'gear',
            secondary: 'triangle-1-s'
         }
      }
   }]);