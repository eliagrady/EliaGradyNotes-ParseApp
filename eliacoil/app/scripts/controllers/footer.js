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
    $scope.message = 'This site was built by Elia Grady, 2015 - Parse.com hosted';
  }]);
