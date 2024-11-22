export const baseURL = 'https://api.themoviedb.org/3';
export const imgBaseURL = 'https://image.tmdb.org/t/p/w500'
export const imgOriginal ='https://image.tmdb.org/t/p/original'
export const youTubeURL = 'https://www.youtube.com/embed/';
export const endPoints = {
    //discover
    movies:'/discover/movie',
    tv:'/discover/tv',
    // movies
    nowPlaying:'/movie/now_playing',
    popularMovies:'/movie/popular',
    topRatedMovies:'/movie/top_rated',
    upComing:'/movie/upcoming',
    account:'/account/21524014',

    //tv
    airingToday:'/tv/airing_today',
    onTheAir:'/tv/on_the_air',
    popularTV:'/tv/popular',
    topRatedTV:'/tv/top_rated',
    //genres
    genres:'/genre/movie/list',
    tvGenres:'/genre/tv/list',
    //search
    searchMovie:'/search/movie?query=',
    searchTV:'/search/tv?query=',
    //By id movies
    getMovieByID:'/movie/',
    images:'/images',
    videos:'/videos',
    //by id TV
    getTVByID:'/tv/',


}
export const query = {
    page:'?page=',
    with_genres:'&with_genres=',
    query:'?query=',
    pageAsSecondQuery:'&page='
}
