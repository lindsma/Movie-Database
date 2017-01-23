angular.module('movieApp').service('SearchService', function($http, $location, $state, localStorageService) {
    function searchMovies(searchTerms, callback) {
        $http({
            method: 'GET',
            url: "http://www.omdbapi.com/?s=" + searchTerms
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

    return {
      searchMovies: searchMovies,
      setSearchResults: setSearchResults,
      getSearchResults: getSearchResults
    };
});
