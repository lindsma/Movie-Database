angular.module('movieApp').service('SearchService', function($http, $location, $state, localStorageService) {
    function searchMovies(searchTerms, callback) {
        setSearchTerms(searchTerms);
        $http({
            method: 'GET',
            url: "http://www.omdbapi.com/?s=" + searchTerms + "&type=movie"
        }).then(callback, function errorCallback(response) {
            console.log(response);
        });
    }

    function setSearchResults(searchResults) {
        localStorageService.set('searchResults', searchResults);
    }

    function getSearchResults() {
        return localStorageService.get('searchResults') || [];
    }

    function setSearchTerms(searchTerms) {
        localStorageService.set('searchTerms', searchTerms);
    }

    function getSearchTerms() {
        return localStorageService.get('searchTerms') || false;
    }

    function getWatchlist() {
        return localStorageService.get('watchlist') || [];
    }

    function setWatchlist(newList) {
        localStorageService.set('watchlist', newList);
    }

    return {
      searchMovies: searchMovies,
      setSearchResults: setSearchResults,
      getSearchResults: getSearchResults,
      setSearchTerms: setSearchTerms,
      getSearchTerms: getSearchTerms,
      setWatchlist: setWatchlist,
      getWatchlist: getWatchlist
    };
});
