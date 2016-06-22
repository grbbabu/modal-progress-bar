'use strict';

describe('Factory: DataService', function () {

  beforeEach(module('modalProgressBarApp.components'));

  var dataService;
  
  beforeEach(inject(function (_dataService_) {
    dataService = _dataService_;
  }));

  it('should be defined.', function () {
    expect(dataService).toBeDefined();
  });

  it('should define getData() method', function () {
    expect(dataService.getData).toBeDefined();
  });

  describe('Factory: DataService:getData', function() {
    var $httpBackend, responseData, originalTimeout;

    beforeEach(inject(function(_$injector_) {
      $httpBackend = _$injector_.get('$httpBackend');
      responseData = {
        'total': 1,
        'data': {
          'lightbox': {
            'start': 0,
            'finish': 100,
            'duration': 2000
          }
        }
      };

      originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
      jasmine.DEFAULT_TIMEOUT_INTERVAL = 5000;
    }));

    afterEach(function() {
      jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
    });

    it('should return correct response', function (done) {
      $httpBackend.when('GET', './data.json').respond(responseData);
      dataService.getData().then(function (response) {
        expect(response).not.toBeNull();
        expect(response.data).not.toBeNull();
        expect(response.data).toEqual(responseData);
        done();
      }, function() {
        console.log('Response not obtained.');
        done();
      });
      $httpBackend.flush();
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });
  });
});
