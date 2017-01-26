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
      }).state('movieAppParent.results', {
          url:'search-results',
          controller: 'ResultsController as results',
          templateUrl: 'src/templates/results.html'
      }).state('movieAppParent.watchlist', {
          url:'watchlist',
          controller: 'WatchlistController as watchlist',
          templateUrl: 'src/templates/watchlist.html'
      });
  });

})(jQuery);
