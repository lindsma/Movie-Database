angular.module('movieApp').controller('MainController', function($state, $scope, SearchService) {
    this.searchTerms = '';
    // search movies and determine whether to use poster link or backup image
    // redirect to search-results page
    this.searchMovies = (searchTerms) => {
        let search = '';
        SearchService.searchMovies(searchTerms, function(response) {
            if (response.data.Response === 'True') {
                search = response.data.Search;
                search.map(result => {
                    if (result.Poster === 'N/A' || result.Poster.includes('ia.media')) {
                        result.Poster = "http://www.newdesignfile.com/postpic/2015/02/no-icon-available_68024.png";
                    }
                });
            } else {
                search = {
                    error: true
                }
            }
            SearchService.setSearchResults(search);
            $state.current.name !== 'movieAppParent.results' ? $state.go('movieAppParent.results') : $state.reload();
        });
        this.searchTerms = '';
    }
    // apply 'home' searchbar styles
    this.revertStyles = () => {
        $('div.search').removeClass('results').addClass('home');
    }
});
