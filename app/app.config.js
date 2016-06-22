(function() {
  'use strict';

  angular.module('modalProgressBarApp')
    .config(appConfig);

  function appConfig($compileProvider, $logProvider) {
    'ngInject';

    // Use angular.reloadWithDebugInfo(); to debug the angular application.
    $compileProvider.debugInfoEnabled(false);
    // Change the value to true in debug mode.
    $logProvider.debugEnabled(false);
  }
})();
