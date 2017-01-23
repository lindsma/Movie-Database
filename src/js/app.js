(function($) {
  "use strict";

  const app = angular.module('movieApp', ['ui.router']);

  app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('movieAppParent', {
          url: '/',
          abstract: true,
          template: '<ui-view></ui-view>'
      }).state('movieAppParent.home', {
          url: '',
          controller: 'HomeController as home',
          templateUrl: 'src/templates/home.html'
      }).state('movieAppParent.results', {
          url:'search-results',
          controller: 'ResultsController as results',
          templateUrl: 'src/templates/results.html'
      });
  });

})(jQuery);
