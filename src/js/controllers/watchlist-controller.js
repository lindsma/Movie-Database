angular.module('movieApp').controller('WatchlistController', function($state, $scope, SearchService) {
// remove 'home' styles on searchbar
$('div.search').removeClass('home').addClass('results');
// pull in watchlist
this.populateResults = () => {
    $scope.movieList = SearchService.getWatchlist();
}
// open modal and set current movie details
this.getDetails = (movie) => {
    $scope.currentMovie = movie;
    $scope.modalOpen = true;
}
// remove movie from watchlist
this.removeMovie = (index) => {
  let watchlist = SearchService.getWatchlist();
  watchlist.splice(index, 1);
  $scope.movieList = watchlist;
  SearchService.setWatchlist(watchlist);
}

this.populateResults();
});
