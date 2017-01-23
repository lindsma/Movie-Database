angular.module('movieApp').controller('ResultsController', function($state, $scope, SearchService) {
console.log('hi');
$('div.search').removeClass('home').addClass('results');
});
