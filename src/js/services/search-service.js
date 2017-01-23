angular.module('movieApp').service('SearchService', function($http, $location, $state) {
    function searchMovies(searchTerms) {
        $http({
            method: 'GET',
            url: "http://www.omdbapi.com/?s=" + searchTerms
        }).then(function successCallback(response) {
            currentResults = response.data.Search;
            console.log(currentResults);
        }, function errorCallback(response) {
            console.log(response);
        });
    }



    return {
      searchMovies: searchMovies,
    };
});
