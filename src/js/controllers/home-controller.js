angular.module('movieApp').controller('HomeController', function($state, $scope, SearchService) {
  this.searchMovies = function(searchTerms) {
    SearchService.searchMovies(searchTerms, function(response) {
      SearchService.setSearchResults(response.data.Search);
      $state.go('movieAppParent.results');
    });
  }

  this.revertStyles = function() {
    console.log('hello');
    $('div.search').removeClass('results').addClass('home');
  }
});
