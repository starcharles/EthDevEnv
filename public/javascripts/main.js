/* jshint undef: true, unused: true, latedef: true */
/* jshint quotmark: single, eqeqeq: true, camelcase: true */
/* jshint devel: true, globalstrict: true */

/* global angular */

'use strict';

angular.module('mainModule', ['ngRoute', 'ngResource', 'ngSanitize', 'ngAnimate', 'mgcrea.ngStrap']);

angular.module('mainModule').controller('homeController', function($scope, postResource) {
  function fetchPosts() {
    postResource.query(function(data) {
      $scope.posts = data;
    });
  }
  fetchPosts();
  $scope.addPost = function(message) {
    if (!message) return;
    if (!$scope.myself) return;
    postResource.save({
      message: message,
      from: {
        id: $scope.myself.facebook_user_id, // jshint ignore:line
        name: $scope.myself.fullname
      }
    }, fetchPosts);
  };
});
