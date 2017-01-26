angular.module('movieApp').controller('ResultsController', function($state, $scope, SearchService) {
    $('div.search').removeClass('home').addClass('results');

    this.populateResults = function() {
        $scope.searchResults = SearchService.getSearchResults();
        $scope.searchTerms = SearchService.getSearchTerms();
    }

    this.setWatchlist = function(watchObj) {
        console.log(watchObj);
        $scope.imdbID = watchObj.imdbID;
        let currentList = SearchService.getWatchlist();
        currentList.push(watchObj);
        SearchService.setWatchlist(currentList);
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
