'use strict';

describe('Controller: ModalProgressBarController', function () {
  
  beforeEach(module('modalProgressBarApp.components'));

  var ModalProgressBarController, $controller, progressBarData, $uibModalInstance, $interval, TIMER_INTERVAL;
  
  beforeEach(inject(function (_$controller_, _$interval_, _TIMER_INTERVAL_) {
    $uibModalInstance = {
      close: function() {
      }
    };
    progressBarData = {
      data: {
        data: {
          'lightbox': {
            'start': 0,
            'finish': 100,
            'duration': 2000
          }
        }
      }
    };

    $controller = _$controller_;
    $interval = _$interval_;
    TIMER_INTERVAL = _TIMER_INTERVAL_;

    spyOn($uibModalInstance, 'close').and.callThrough();


    ModalProgressBarController = $controller('ModalProgressBarController', {
      $uibModalInstance: $uibModalInstance,
      progressBarData: progressBarData,
      $interval: $interval
    });
  }));

  it('should be defined.', function () {
    expect(ModalProgressBarController).toBeDefined();
  });

  it('should be initialized correctly', function() {
    expect(ModalProgressBarController.data).toEqual(progressBarData.data.data);
    expect(ModalProgressBarController.duration).toBe(0);
    expect(ModalProgressBarController.progress).toBe(0);
    expect(ModalProgressBarController.max).toBe(progressBarData.data.data.lightbox.finish);
    expect(ModalProgressBarController.progressType).toBeNull();
    expect(ModalProgressBarController.ok).toBeDefined();
    expect(ModalProgressBarController.updateProgressBar).toBeDefined();
    expect(ModalProgressBarController.stopInterval).toBeDefined();
  });

  it('should call $uibModalInstance cloase method on ok()', function() {
    ModalProgressBarController.ok();
    expect($uibModalInstance.close).toHaveBeenCalled();
  });

  it('should set the interval for progress bar correctly.', function() {
    var $intervalSpy = jasmine.createSpy('$interval', $interval);

    var controller = $controller('ModalProgressBarController', {
      $uibModalInstance: $uibModalInstance,
      progressBarData: progressBarData,
      $interval: $intervalSpy
    });
    expect(controller).toBeDefined();
    expect($intervalSpy).toHaveBeenCalledWith(controller.updateProgressBar, TIMER_INTERVAL);
  });

  it('should update the progress bar when duration is less than TIMER_INTERVAL.', function() {
    ModalProgressBarController.updateProgressBar();
    expect(ModalProgressBarController.duration).toBe(TIMER_INTERVAL);
    var progress = (ModalProgressBarController.duration/ModalProgressBarController.data.lightbox.duration) * 100;
    expect(ModalProgressBarController.progress).toBe(Math.round((progress)));
  });

  it('should change the progress bar to success when duration is greater than or equal to lightbox duration.', function() {
    ModalProgressBarController.duration = 2000;
    spyOn($interval, 'cancel');
    ModalProgressBarController.updateProgressBar();
    expect($interval.cancel).toHaveBeenCalled();
    expect(ModalProgressBarController.progressType).toBe('success');
  });
});
