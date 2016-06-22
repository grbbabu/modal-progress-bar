(function() {
  'use strict';

  angular.module('modalProgressBarApp')
    .controller('MainController', MainController);

  function MainController(modalProgressBarService, $window) {
    'ngInject';

    var vm = this;
    vm.openProgressBarDialog = modalProgressBarService.open;
    vm.onWindowLoad = onWindowLoad;

    angular.element($window).bind('load', onWindowLoad);

    function onWindowLoad() {
      vm.openProgressBarDialog();
    }
  }
})();
