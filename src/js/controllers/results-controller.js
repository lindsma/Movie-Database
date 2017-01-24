angular.module('movieApp').controller('ResultsController', function($state, $scope, SearchService) {
$('div.search').removeClass('home').addClass('results');

this.populateResults = function() {
  $scope.searchResults = SearchService.getSearchResults();
  $scope.searchTerms = SearchService.getSearchTerms();
}

this.setWatchlist = function(watchObj) {
  let currentList = SearchService.getWatchlist();
  currentList.push(watchObj);
  SearchService.setWatchlist(currentList);
}

this.populateResults();
});
