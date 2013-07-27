angular.module('jqueryui.directives', [])

   .directive('jqButton', function () {
      return {
         restrict: 'A',
         scope:    {
            ngDisabled:    '=',
            text:          '=',
            label:         '=',
            primaryIcon:   '=',
            secondaryIcon: '='
         },
         link:     function (scope, elm, attrs) {
            var button = $(elm[0]).button().data('ui-button'),
               oldLabel = $.trim($(elm[0]).text());

            // Icons
            if (angular.isDefined(attrs.primaryIcon) || angular.isDefined(attrs.secondaryIcon)) {
               scope.$watch('primaryIcon + secondaryIcon', function () {
                  button.option('icons', {
                     primary:   angular.isDefined(scope.primaryIcon) ? 'ui-icon-' + scope.primaryIcon : null,
                     secondary: angular.isDefined(scope.secondaryIcon) ? 'ui-icon-' + scope.secondaryIcon : null});
               });
            }

            // Disabled
            if (angular.isDefined(attrs.ngDisabled)) {
               scope.$watch('ngDisabled', function (val) {
                  button.option('disabled', val);
               });
            }

            // Text
            if (angular.isDefined(attrs.text)) {
               scope.$watch('text', function (val) {
                  button.option('text', val);
               });
            }

            // Text
            if (angular.isDefined(attrs.label)) {
               scope.$watch('label', function (val) {
                  button.option('label', val ? val : oldLabel);
               });
            }

            // Destroy
            scope.$on('destroy', function () {
               button.destroy();
            });
         }
      };
   })

   .directive('jqButtonset', function () {
      return {
         restrict: 'A',
         scope:    {
            ngDisabled: '=',
            text:       '='
         },
         link:     function (scope, elm, attrs) {
            var jqueryElm = $(elm[0]);
            $(jqueryElm).buttonset();
         }
      };
   });