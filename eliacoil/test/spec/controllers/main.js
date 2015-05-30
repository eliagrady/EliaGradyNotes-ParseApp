'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('eliacoilApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(4);
  });


  it('should load a welcome message to the homepage', function () {
    expect(scope.p).toBe(4);
  });
});
