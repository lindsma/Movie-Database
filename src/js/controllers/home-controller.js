angular.module('movieApp').controller('HomeController', function($state, $scope, SearchService) {
  this.searchMovies = function(searchTerms) {
    SearchService.searchMovies(searchTerms);
    $state.go('movieAppParent.results')

  }
});
