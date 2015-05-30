'use strict';

describe('Controller: DatabaseCtrl', function () {

  // load the controller's module
  beforeEach(module('eliacoilApp'));

  var DatabaseCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DatabaseCtrl = $controller('DatabaseCtrl', {
      $scope: scope
    });
  }));

});
