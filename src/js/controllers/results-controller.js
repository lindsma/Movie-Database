angular.module('movieApp').controller('ResultsController', function($state, $scope, SearchService) {
this.searchResults = SearchService.getSearchResults();
console.log(this.searchResults);
console.log('hi');
$('div.search').removeClass('home').addClass('results');
});
