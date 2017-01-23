(function($) {
  "use strict";

  const app = angular.module('movieApp', ['ui.router', 'LocalStorageModule']);

  app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('movieAppParent', {
          url: '/',
          abstract: true,
          template: '<ui-view></ui-view>'
      }).state('movieAppParent.home', {
          url: '',
          templateUrl: 'src/templates/home.html'
      }).state('movieAppParent.results', {
          url:'search-results',
          controller: 'ResultsController as results',
          templateUrl: 'src/templates/results.html'
      });
  });

})(jQuery);
