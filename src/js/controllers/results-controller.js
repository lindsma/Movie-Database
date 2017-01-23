angular.module('movieApp').controller('ResultsController', function($state, $scope, SearchService) {
$scope.searchResults = SearchService.getSearchResults();
console.log('hi');
$('div.search').removeClass('home').addClass('results');
});
