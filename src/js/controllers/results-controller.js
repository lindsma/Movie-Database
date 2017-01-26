angular.module('movieApp').controller('ResultsController', function($state, $scope, SearchService) {
    $('div.search').removeClass('home').addClass('results');

    this.populateResults = function() {
        $scope.searchResults = SearchService.getSearchResults();
        $scope.searchTerms = SearchService.getSearchTerms();
    }

    this.setWatchlist = function(watchObj) {
        $scope.imdbID = watchObj.imdbID;
        let currentList = SearchService.getWatchlist();
        let arr = currentList.filter(movie => {
          return watchObj.imdbID === movie.imdbID;
        });
        if (arr.length < 1) {
          currentList.push(watchObj);
          SearchService.setWatchlist(currentList);
        }
    }

    this.getDetails = function(movieID) {
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
