(function() {
  'use strict';

  angular.module('modalProgressBarApp.components')
    .factory('modalProgressBarService', modalProgressBarService);

  function modalProgressBarService($uibModal, dataService) {
    'ngInject';

    var modalProgressBarServiceFactory = {
      open: openModalDialog
    };

    return modalProgressBarServiceFactory;

    function openModalDialog() {
      return $uibModal.open({
        animation: true,
        templateUrl: 'components/services/modalProgressBar/modalProgressBar.html',
        controller: 'ModalProgressBarController',
        controllerAs: 'modalvm',
        resolve: {
          progressBarData: dataService.getData
        }
      });
    }
  }
})();
