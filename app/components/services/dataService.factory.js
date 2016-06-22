(function() {
  'use strict';

  angular.module('modalProgressBarApp.components')
    .factory('dataService', dataService);

  function dataService($http) {
    'ngInject';

    var dataServiceFactory = {
      getData: getData
    };

    return dataServiceFactory;


    function getData() {
      return $http.get('./data.json');
    }
  }
})();
