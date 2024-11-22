import {baseURL, endPoints, query} from "@/app/urls/urls";
import {headers} from "@/app/data/data";
import {IGenreData} from "@/app/models/IGenre";
import {IData} from "@/app/models/IData";
import {ITelevision} from "@/app/models/ITelevision";
import {dataBuilder} from "@/app/helpers/databuilder";
import {ITelevisionByID} from "@/app/models/ITelevisionByID";
import { IDataImages} from "@/app/models/IImage";
import {IVideoData} from "@/app/models/IVideoMovie";


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
        },
        getAiringToday: async (page:string):Promise<IData & {results:ITelevision[]}> =>{
           const airingToday = await fetch(baseURL+endPoints.airingToday+query.page+page,{
               method:'GET',
               headers:headers
           }).then(response => response.json())
            return dataBuilder<ITelevision[]>(airingToday)
        },
        getOnAirToday: async (page:string):Promise<IData & {results:ITelevision[]}> =>{
            const onTheAir:IData & {results:ITelevision[]} = await fetch(baseURL+endPoints.onTheAir+query.page+page,{
                method:'GET',
                headers:headers
            }).then(response =>response.json())
            return dataBuilder<ITelevision[]>(onTheAir)
        },
        getPopularTV: async  (page:string):Promise<IData & {results:ITelevision[]}> =>{
            const popularTV:IData & {results:ITelevision[]} = await fetch(baseURL+endPoints.popularTV+query.page+page,{
                method:'GET',
                headers:headers
            }).then(response => response.json())
            return dataBuilder<ITelevision[]>(popularTV)
        },
        getTopRatedTV: async (page:string):Promise<IData & {results:ITelevision[]}> =>{
            const topRatedTV = await fetch(baseURL+endPoints.topRatedTV+query.page+page,{
                method:'GET',
                headers:headers
            }).then(response => response.json())
            return dataBuilder<ITelevision[]>(topRatedTV)
        }
    },
    singleTVSeries:{
        getTVShowByID: async (id:string):Promise<ITelevisionByID> =>{
            return(await fetch(baseURL+endPoints.getTVByID+id,{
                method:'GET',
                headers:headers
            }).then(response =>response.json()))
        },
        getImagesOfTV: async (id:string) :Promise<IDataImages> =>{
            return (await fetch(baseURL+endPoints.getTVByID+id+endPoints.images,{
                method:'GET',
                headers:headers
            }).then(response => response.json()))
        },
        getVideosOfTV: async (id:string):Promise<IVideoData> =>{
              return (await fetch(baseURL+endPoints.getTVByID+id+endPoints.videos,{
                  method:'GET',
                  headers:headers
              }).then(response =>response.json()))
        }
    },
    searchSection: async (string:string,page:string):Promise<IData & {results:ITelevision[]}> =>{
        const searchTV:IData & {results:ITelevision[]} =
            await fetch(`${baseURL+endPoints.searchTV+string}&page=${page}`,{
                method:'GET',
                headers:headers
            }).then(response =>response.json());
        return dataBuilder<ITelevision[]>(searchTV)
    }
}