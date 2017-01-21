angular.module('movieApp').service('SearchService', function($http, $location, $state) {
    function getMovies(title) {
        $http({
            method: 'GET',
            url: "http://www.omdbapi.com/?t=" + title
        }).then(function successCallback(response) {
            console.log(response);
        }, function errorCallback(response) {
            console.log(response);
        });
    }
});
