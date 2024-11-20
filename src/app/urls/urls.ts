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
    topRated:'/movie/top_rated',
    upComing:'/movie/upcoming',
    //tv
    airingToday:'/tv/airing_today',
    //genres
    genres:'/genre/movie/list',
    tvGenres:'/genre/tv/list',
    //search
    searchMovie:'/search/movie?query=',
    searchTV:'/search/tv?query=',
    //By id
    getMovieByID:'/movie/',
    getTVByID:'/tv/',
    images:'/images',
    videos:'/videos',
}
export const query = {
    page:'?page=',
    with_genres:'&with_genres=',
    query:'?query=',
    pageAsSecondQuery:'&page='
}
