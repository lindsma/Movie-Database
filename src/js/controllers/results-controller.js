angular.module('movieApp').controller('ResultsController', function($state, $scope, SearchService) {
$('div.search').removeClass('home').addClass('results');

this.populateResults = function() {
  $scope.searchResults = SearchService.getSearchResults();
  $scope.searchTerms = SearchService.getSearchTerms();
}

this.populateResults();
});
