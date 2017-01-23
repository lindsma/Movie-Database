angular.module('movieApp').controller('AppController', function($state, $scope, SearchService) {
  this.searchMovies = function(searchTerms) {
    SearchService.searchMovies(searchTerms);
    $state.go('movieAppParent.results')
  }

  this.revertStyles = function() {
    console.log('hello');
    $('div.search').removeClass('results').addClass('home');
  }
});
