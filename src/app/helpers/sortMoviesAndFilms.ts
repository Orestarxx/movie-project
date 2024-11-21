import {movieService} from "@/app/services/movie.service";
import {tvService} from "@/app/services/tv.service";
import {IObjectWithFilmsAndTVs} from "@/app/models/IObjectWithFilmsAndTVs";


export const sortedMoviesAndTV = async ():Promise<IObjectWithFilmsAndTVs>  => {
  const promised =  await Promise.all([
        movieService.movies.getPopularMovies('1'),
        movieService.movies.getNowPlaying('1'),
        movieService.movies.getTopRated('1'),
        tvService.tvSeries.getPopularTV('1'),
        tvService.tvSeries.getAiringToday('1'),
        tvService.tvSeries.getTopRatedTV('1')
    ])
  return{
      topRatedMovies:[...promised[2].results],
      topRatedTV:[...promised[5].results],
      popularMovies:[...promised[0].results],
      popularTV:[...promised[3].results],
      airingToday:[...promised[4].results],
      nowPlaying:[...promised[1].results]
  }


}