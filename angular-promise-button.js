(function () {
    
    'use strict';
    
    angular.module('promiseButton', [])
        .directive('promiseButton', promiseButton);
    
    promiseButton.$inject = ['$timeout'];
    
    function promiseButton($timeout) {
        
        function link(scope, element, attrs) {
            
            var started = false, // is click event start
                
                disabledClass = 'bdp-btn-disabled', // class used in css file to define the style of button
                
                start = function () {
                    started = true;
                    element.addClass(disabledClass);
                    scope.click(); // excute promise event
                },

                // promise event complete , reset button style
                done = function (over) {
                    started = false;
                    scope.completed = undefined;

                    $timeout(function () {
                        element.removeClass(disabledClass);
                    }, 400);
                };

            // button click event
            element.bind('click', function () {
                
                if (!started) { // button have not been clicked
                    start();
                }
            });

            scope.$watch('completed', function (success) {
                if (success) {
                    done(true);
                }
            });
        }
        
        var directive = {
            restirct: 'EA',
            scope: {
                completed: '=pbCompleted',
                click: '&pbClick'
            },
            link: link
        };
        
        return directive;
        
    }
})();