angular.module('movieApp').controller('MainController', function($state, $scope, SearchService) {
  this.searchTerms = '';
  this.searchMovies = function(searchTerms) {
    SearchService.searchMovies(searchTerms, function(response) {
      let search = response.data.Search;
      search.map(result => {
        if(result.Poster === 'N/A') {
          result.Poster = "http://www.newdesignfile.com/postpic/2015/02/no-icon-available_68024.png";
        }
      });
      SearchService.setSearchResults(search);
      $state.current.name !== 'movieAppParent.results' ? $state.go('movieAppParent.results') : $state.reload();
    });
    this.searchTerms = '';
  }

  this.revertStyles = function() {
    $('div.search').removeClass('results').addClass('home');
  }
});
