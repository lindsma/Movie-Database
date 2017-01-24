angular.module('movieApp').controller('MainController', function($state, $scope, SearchService) {
  this.searchTerms = '';
  this.searchMovies = function(searchTerms) {
    SearchService.searchMovies(searchTerms, function(response) {
      SearchService.setSearchResults(response.data.Search);
      $state.current.name !== 'movieAppParent.results' ? $state.go('movieAppParent.results') : $state.reload();
    });
    this.searchTerms = '';
  }

  this.revertStyles = function() {
    console.log('hello');
    $('div.search').removeClass('results').addClass('home');
  }
});
