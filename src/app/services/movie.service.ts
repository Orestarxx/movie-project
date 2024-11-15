import {baseURL, endPoints, query} from "@/app/urls/urls";
import {headers} from "@/app/data/data";
import {IData} from "@/app/models/IData";
import {IMovie} from "@/app/models/IMovie";

export const movieService = {
    genres:{
        getGenres: async () =>{

        },
    },
    movies:{
        getAllMovies: async (page:string):Promise<IData & {results:IMovie[]}> =>{
          const movies:IData & {results:IMovie[]} =
              await fetch(`${baseURL}${endPoints.movies}${query.page}${page}`,{
              method:'GET',
              headers:headers,
          }).then(response =>response.json());
          const changedMovies:IData & {results:IMovie[]} = {
              ...movies,
              next:false,
              previous:false
          }
          changedMovies.next = changedMovies.total_pages === changedMovies.page? true:false;
          changedMovies.previous = changedMovies.page === 1? true:false;
          return changedMovies
        }
    }
}