angular.module('movieApp').controller('WatchlistController', function($state, $scope, SearchService) {

$('div.search').removeClass('home').addClass('results');

this.populateResults = function() {
    $scope.movieList = SearchService.getWatchlist();
}

this.getDetails = function(movie) {
    $scope.currentMovie = movie;
    $scope.modalOpen = true;
}

this.removeMovie = function(index) {
  let watchlist = SearchService.getWatchlist();
  watchlist.splice(index, 1);
  $scope.movieList = watchlist;
  SearchService.setWatchlist(watchlist);
}

this.populateResults();
});
