import {IMovie} from "@/app/models/IMovie";
import {ITelevision} from "@/app/models/ITelevision";

export interface IObjectWithFilmsAndTVs {
    popularMovies:IMovie[],
    popularTV:ITelevision[],
    nowPlaying:IMovie[],
    airingToday:ITelevision[],
    topRatedMovies:IMovie[],
    topRatedTV:ITelevision[]
}
