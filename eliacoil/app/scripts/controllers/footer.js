'use strict';

/**
 * @ngdoc function
 * @name eliacoilApp.controller:FooterController
 * @description
 * # FooterController
 * This controller controls the footer in eliacoilApp
 */
angular.module('eliacoilApp')
  .controller('FooterCtrl', ['$scope', function ($scope) {
    $scope.message = 'Built by Elia Grady 2015';
  }]);
