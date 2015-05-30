'use strict';

/**
 * @ngdoc function
 * @name eliacoilApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the eliacoilApp
 */
angular.module('eliacoilApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'temp'
    ];
  }]);
