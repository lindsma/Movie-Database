angular.module('movieApp').service('SearchService', function($http, $location, $state, localStorageService) {
    // wildcard search for movie
    searchMovies = (searchTerms, callback) => {
        setSearchTerms(searchTerms);
        $http({
            method: 'GET',
            url: "http://www.omdbapi.com/?s=" + searchTerms + "&type=movie"
        }).then(callback, function errorCallback(response) {
            console.log(response);
        });
    }
    // navigate through results
    changePage = (searchTerms, page) => {
        $http({
            method: 'GET',
            url: "http://www.omdbapi.com/?s=" + searchTerms + "&type=movie" + "&page=" + page
        }).then(callback, function errorCallback(response) {
            console.log(response);
        });
    }
    // search for movie by imdbID
    findByID = (movieID, callback) => {
        $http({
            method: 'GET',
            url: "http://www.omdbapi.com/?i=" + movieID
        }).then(callback, function errorCallback(response) {
            console.log(response);
        });
    }
    // set search results in local storage
    setSearchResults = (searchResults) => {
        localStorageService.set('searchResults', searchResults);
    }
    // get search results from local storage
    getSearchResults = () => {
        return localStorageService.get('searchResults') || [];
    }
    // set search terms in local storage
    setSearchTerms = (searchTerms) => {
        localStorageService.set('searchTerms', searchTerms);
    }
    // get search terms from local storage
    getSearchTerms = () => {
        return localStorageService.get('searchTerms') || false;
    }
    // get watchlist from local storage
    getWatchlist = () => {
        return localStorageService.get('watchlist') || [];
    }
    // set watchlist in local storage
    setWatchlist = (newList) => {
        localStorageService.set('watchlist', newList);
    }

    return {
      searchMovies: searchMovies,
      setSearchResults: setSearchResults,
      getSearchResults: getSearchResults,
      setSearchTerms: setSearchTerms,
      getSearchTerms: getSearchTerms,
      setWatchlist: setWatchlist,
      getWatchlist: getWatchlist,
      findByID: findByID,
      changePage: changePage
    };
});
