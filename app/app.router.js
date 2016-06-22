(function() {
  'use strict';

  angular.module('modalProgressBarApp')
    .config(configRoutes);

  function configRoutes($stateProvider, $urlRouterProvider) {
    'ngInject';

    $stateProvider
      .state('main', {
        url: '/main',
        templateUrl: 'main/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/main');
  }
})();
