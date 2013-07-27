angular.module('jqueryui.directives', [])

   .directive('jqButton', function () {
      return {
         restrict: 'A',
         scope:    {
            ngDisabled:    '=',
            text:          '=',
            label:         '=',
            primaryIcon:   '=',
            secondaryIcon: '=',
            ngChecked:     '='
         },
         link:     function (scope, elm, attrs) {
            var button = $(elm[0]).button().data('ui-button'),
               oldLabel = $.trim($(elm).next('label').text()) || $.trim($(elm[0]).text());

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

            // Label
            if (angular.isDefined(attrs.label)) {
               scope.$watch('label', function (val) {
                  button.option('label', val ? val : oldLabel);
               });
            }

            // Checkbox
            if (angular.isDefined(attrs.type) && attrs.type === 'checkbox') {
               if (angular.isDefined(attrs.ngChecked)) {
                  scope.$watch('ngChecked', function (val) {
                     $(elm[0]).prop('checked', val);
                     button.refresh();
                  });
               }

               //TODO: Update checkbox property is missing
//               $(elm[0]).on('click', function (e) {
//                  $(elm[0]).prop('checked', $(e.currentTarget).next().hasClass('ui-state-active'));
//                  scope.ngChecked = $(e.currentTarget).next().hasClass('ui-state-active');
//               });
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
         restrict: 'EA',
         link:     function (scope, elm, attrs) {
            var jqueryElm = $(elm[0]);
            $(jqueryElm).buttonset();
         }
      };
   });