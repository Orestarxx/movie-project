export const baseURL = 'https://api.themoviedb.org/3';
export const imgBaseURL = 'https://image.tmdb.org/t/p/w500'
export const imgOriginal ='https://image.tmdb.org/t/p/original'
export const youTubeURL = 'https://www.youtube.com/embed/';
export const endPoints = {
    //discover
    movies:'/discover/movie',
    tv:'/discover/tv',
    //genres
    genres:'/genre/movie/list',
    tvGenres:'/genre/tv/list',
    //search
    search:'/search/movie?query=',
    //By id
    getMovieByID:'/movie/',
    images:'/images',
    videos:'/videos'
}
export const query = {
    page:'?page=',
    with_genres:'&with_genres=',
    query:'?query='
}
