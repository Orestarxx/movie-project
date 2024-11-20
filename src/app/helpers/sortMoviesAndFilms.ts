import {movieService} from "@/app/services/movie.service";
import {IMovie} from "@/app/models/IMovie";
import {IObjectWithFilmsAndTVs} from "@/app/models/IObjectWithFilmsAndTVs";
import {IData} from "@/app/models/IData";
import {ITelevision} from "@/app/models/ITelevision";
import {tvService} from "@/app/services/tv.service";

export const sortedMoviesAndTV = async (): Promise<IObjectWithFilmsAndTVs> => {
    const popularMovies:IData & { results: IMovie[] } = await movieService.movies.getPopularMovies('1')
    const nowPlayingMovies:IData & { results: IMovie[] } = await movieService.movies.getNowPlaying('1')
    const topRatedMovies:IData & { results: IMovie[] } = await movieService.movies.getTopRated('1')
    const popularTV:IData & { results: ITelevision[] } = await tvService.tvSeries.getPopularTV('1')
    const airingNowTV:IData & { results: ITelevision[] } = await tvService.tvSeries.getAiringToday('1')
    const topRatedTV:IData & { results: ITelevision[] } = await tvService.tvSeries.getTopRatedTV('1')
    return {
        popularMovies: [...popularMovies.results],
        nowPlaying: [...nowPlayingMovies.results],
        topRatedMovies: [...topRatedMovies.results],
        airingToday:[...airingNowTV.results],
        popularTV:[...popularTV.results],
        topRatedTV:[...topRatedTV.results]
    }
}