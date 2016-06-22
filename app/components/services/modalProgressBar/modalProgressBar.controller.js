(function() {
  'use strict';

  angular.module('modalProgressBarApp.components')
    .controller('ModalProgressBarController', ModalProgressBarController);

  function ModalProgressBarController($uibModalInstance, progressBarData, $interval, TIMER_INTERVAL) {
    'ngInject';

    var modalvm = this;

    modalvm.data = progressBarData.data.data;
    modalvm.duration = 0;
    modalvm.progress = 0;
    modalvm.max = modalvm.data.lightbox.finish;
    modalvm.progressType = null;
    modalvm.ok = onOk;
    modalvm.updateProgressBar = updateProgressBar;

    modalvm.stopInterval = $interval(updateProgressBar, TIMER_INTERVAL);

    function onOk() {
      $uibModalInstance.close();
    }

    function updateProgressBar() {
      if(modalvm.duration >= modalvm.data.lightbox.duration) {
        $interval.cancel(modalvm.stopInterval);
        modalvm.progressType = 'success';
        //modalvm.ok();
      } else {
        modalvm.duration += TIMER_INTERVAL;
        modalvm.progress = (modalvm.duration/modalvm.data.lightbox.duration) * 100;
        modalvm.progress = Math.round(modalvm.progress);
      }
    }
  }
})();
