'use strict';

describe('Controller: MainController', function () {

  beforeEach(module('modalProgressBarApp'));

  var MainController, modalProgressBarService;
  
  beforeEach(inject(function ($controller) {
    modalProgressBarService = {
      open: function() {}
    };

    spyOn(modalProgressBarService, 'open').and.callThrough();
    MainController = $controller('MainController', {
      modalProgressBarService: modalProgressBarService
    });
  }));

  it('should be defined.', function () {
    expect(MainController).toBeDefined();
  });

  it('openProgressBarDialog method should call modalProgressBarService open service.', function() {
    MainController.openProgressBarDialog();
    expect(modalProgressBarService.open).toHaveBeenCalled();
  });

  it('onWindowLoad method should call modalProgressBarService open service.', function() {
    MainController.onWindowLoad();
    expect(modalProgressBarService.open).toHaveBeenCalled();
  });
});
