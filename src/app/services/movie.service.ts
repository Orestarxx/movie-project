import {baseURL, endPoints, query} from "@/app/urls/urls";
import {headers} from "@/app/data/data";
import {IData} from "@/app/models/IData";
import {IMovie} from "@/app/models/IMovie";
import {IGenreData} from "@/app/models/IGenre";
import {dataBuilder} from "@/app/helpers/databuilder";
import {IMovieByID} from "@/app/models/IMovieByID";
import {IDataImages} from "@/app/models/IImage";

export const movieService = {
    genres: {
        getGenres: async (): Promise<IGenreData> => {
            return await fetch(baseURL + endPoints.genres, {
                method: 'GET',
                headers: headers,
                cache: 'force-cache'
            }).then(response => response.json())

        },
    },
    movies: {
        getAllMovies: async (page: string, pathForGenre?: string): Promise<IData & { results: IMovie[] }> => {
            const movies: IData & { results: IMovie[] } =
                await fetch(`${baseURL}${endPoints.movies}${query.page}${page}${pathForGenre}`, {
                    method: 'GET',
                    headers: headers,
                    cache: 'force-cache'
                }).then(response => response.json());
            return dataBuilder<IMovie[]>(movies)
        },
        getNowPlaying: async (page: string): Promise<IData & {
            results: IMovie[],
            dates?: { maximum: string, minimum: string }
        }> => {
            const nowPlaying: IData & { results: IMovie[], dates?: { maximum: string, minimum: string } } =
                await fetch(baseURL + endPoints.nowPlaying + query.page + page, {
                    method: 'GET',
                    headers: headers
                }).then(response => response.json())
            return dataBuilder<IMovie[] & { dates?: { maximum: string, minimum: string } }>(nowPlaying)

        },
        getPopularMovies: async (page: string): Promise<IData & { results: IMovie[] }> => {
            const popular = await fetch(baseURL + endPoints.popularMovies + query.page + page,
                {
                    method: 'GET',
                    headers: headers
                }).then(response => response.json())
            return dataBuilder<IMovie[]>(popular);
        },
        getTopRated: async (page: string): Promise<IData & { results: IMovie[] }> => {
            const topRated: IData & {
                results: IMovie[]
            } = await fetch(baseURL + endPoints.topRatedMovies + query.page + page, {
                method: 'GET',
                headers: headers
            }).then(response => response.json())
            return dataBuilder<IMovie[]>(topRated)
        },
        getUpcoming: async (page: string): Promise<IData & {
            results: IMovie[],
            dates?: { maximum: string, minimum: string }
        }> => {
            const upComing: IData & { results: IMovie[], dates?: { maximum: string, minimum: string } } =
                await fetch(baseURL + endPoints.upComing + query.page + page,
                    {
                        method: 'GET',
                        headers: headers
                    }).then(response => response.json())
            return dataBuilder<IMovie[] & { dates?: { maximum: string, minimum: string } }>(upComing)
        }
    },
    SingleMovie: {
        getMovieById: async (id: string): Promise<IMovieByID> => {
            return (await fetch(baseURL + endPoints.getMovieByID + id, {
                method: "GET",
                headers: headers
            }).then(response => response.json()))
        },
        getImagesOfMovie: async (id: string): Promise<IDataImages> => {
            return (await fetch(baseURL + endPoints.getMovieByID + id + endPoints.images, {
                method: 'GET',
                headers: headers
            })
                .then(response => response.json()))
        },
        getVideosOfMovie: async (id: string) => {
            return (await fetch(baseURL + endPoints.getMovieByID + id + endPoints.videos, {
                method: 'GET',
                headers: headers
            })
                .then(response => response.json()))
        }
    },
    searchSection: {
        searchMovie: async (string: string, page: string): Promise<IData & { results: IMovie[] }> => {
            const searchMovie: IData & {
                results: IMovie[]
            } = await fetch(`${baseURL + endPoints.searchMovie + string}&page=${page}`, {
                method: 'GET',
                headers: headers
            }).then(response => response.json())
            return dataBuilder<IMovie[]>(searchMovie)
        }
    }
}