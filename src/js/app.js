(function($) {
  "use strict";

  const app = angular.module('movieApp', ['ui.router']);

  app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('codeKarmaParent', {
          url: '/',
          abstract: true,
          template: '<ui-view></ui-view>'
      }).state('codeKarmaParent.home', {
          url: '',
          controller: 'HomeController as home',
          templateUrl: 'src/templates/home.html'
      });
  });

})(jQuery);
