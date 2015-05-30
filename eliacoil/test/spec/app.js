'use strict';

describe('locationProvider configuration',
function () {
  var $locationProvider;
  beforeEach(function () {
    angular.module('locationProviderConfig', [])
    .config(function(_$locationProvider_) {
      $locationProvider= _$locationProvider_;
      spyOn($locationProvider, 'html5Mode');
    });
    module('locationProviderConfig');
    module('eliacoilApp');
    inject()
  });
  it('should set html5 mode to enabled', function() {
    expect($locationProvider.html5Mode)
    .toHaveBeenCalledWith(true);
  });
});
