import {baseURL, endPoints, query} from "@/app/urls/urls";
import {headers} from "@/app/data/data";
import {IData} from "@/app/models/IData";
import {IMovie} from "@/app/models/IMovie";
import {IGenreData} from "@/app/models/IGenre";
import {dataBuilder} from "@/app/helpers/databuilder";

export const movieService = {
    genres:{
        getGenres: async ():Promise<IGenreData> =>{
            const genres:IGenreData = await fetch(baseURL+endPoints.genres,{
                method:'GET',
                headers:headers,
                cache:'force-cache'
            }).then(response => response.json())
            return genres

        },
    },
    movies:{
        getAllMovies: async (page:string, pathForGenre?:string):Promise<IData & {results:IMovie[]}> =>{
          const movies:IData & {results:IMovie[]} =
              await fetch(`${baseURL}${endPoints.movies}${query.page}${page}${pathForGenre}`,{
              method:'GET',
              headers:headers,
          }).then(response =>response.json());
          return dataBuilder(movies)
        }
    },
    searchSection:{
        searchMovie: async (string:string,page:string):Promise<IData & {results:IMovie[]}> =>{
            const searchMovie:IData & {results:IMovie[]} = await fetch(`${baseURL+endPoints.search+string}&page=${page}`,{
                method:'GET',
                headers:headers
            }).then(response =>response.json())
            return searchMovie
        }
    }
}