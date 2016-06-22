'use strict';

describe('Factory: modalProgressBarService', function () {

  var modalProgressBarService, $uibModal, dataService, internalConfig, modalDialogConfig;

  beforeEach(module('modalProgressBarApp.components'));

  beforeEach(function() {

    internalConfig = {};

    $uibModal = {
      open: function(config){
        internalConfig = config;
      }
    };

    dataService = {
      getData: function(){}
    };

    modalDialogConfig = {
      animation: true,
      templateUrl: 'components/services/modalProgressBar/modalProgressBar.html',
      controller: 'ModalProgressBarController',
      controllerAs: 'modalvm',
      resolve: {
        progressBarData: dataService.getData
      }
    };

    spyOn($uibModal, 'open').and.callThrough();

    module(function ($provide) {
      $provide.value('$uibModal', $uibModal);
      $provide.value('dataService', dataService);
    });
  });

  beforeEach(inject(function (_modalProgressBarService_) {
    modalProgressBarService = _modalProgressBarService_;
  }));

  it('should be defined.', function () {
    expect(modalProgressBarService).toBeDefined();
  });

  it('open method should call $uibModal with correct configuration to invoke modal dialog.', function() {
    modalProgressBarService.open();
    expect($uibModal.open).toHaveBeenCalled();
    expect(internalConfig).toEqual(modalDialogConfig);
  });
});
