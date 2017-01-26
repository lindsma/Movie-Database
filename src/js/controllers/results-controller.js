angular.module('movieApp').controller('ResultsController', function($state, $scope, SearchService) {
    // remove 'home' styles from searchbar
    $('div.search').removeClass('home').addClass('results');
    // pull in search results
    this.populateResults = () => {
        $scope.searchResults = SearchService.getSearchResults();
        $scope.searchTerms = SearchService.getSearchTerms();
    }
    // add movie to watchlist
    this.setWatchlist = (watchObj) => {
        $scope.imdbID = watchObj.imdbID;
        let currentList = SearchService.getWatchlist();
        // check to see if movie is already in watchlist
        let arr = currentList.filter(movie => {
          return watchObj.imdbID === movie.imdbID;
        });
        if (arr.length < 1) {
          currentList.push(watchObj);
          SearchService.setWatchlist(currentList);
        }
    }
    // use imdbID to get movie details and open modal
    this.getDetails = (movieID) => {
        SearchService.findByID(movieID, function(response) {
          let results = response.data;
          if (results.Poster === 'N/A') {
              results.Poster = "http://www.newdesignfile.com/postpic/2015/02/no-icon-available_68024.png";
          }
          $scope.movieDetail = results;
          $scope.modalOpen = true;
        });
    }

    this.populateResults();
});
