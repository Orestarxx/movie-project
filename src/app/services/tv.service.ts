import {baseURL, endPoints, query} from "@/app/urls/urls";
import {headers} from "@/app/data/data";
import {IGenreData} from "@/app/models/IGenre";
import {IData} from "@/app/models/IData";
import {ITelevision} from "@/app/models/ITelevision";
import {dataBuilder} from "@/app/helpers/databuilder";


export const tvService = {
    genres:{
        getTVGenres: async ():Promise<IGenreData> =>{
            return (await fetch(baseURL+endPoints.tvGenres,{
                method:'GET',
                headers:headers,
                cache:'force-cache'
            }).then(response =>response.json()))
        }
    },
    tvSeries:{
        getTV: async (page:string,tvGenrePath?:string):Promise<IData & {results:ITelevision[]}> =>{
            const tv:IData & {results:ITelevision[]} =
                await fetch(`${baseURL}${endPoints.tv}${query.page}${page}${tvGenrePath}`,{
                method:'GET',
                headers:headers
            }).then(response => response.json())


            return  dataBuilder<ITelevision[]>(tv)
        }
    }
}