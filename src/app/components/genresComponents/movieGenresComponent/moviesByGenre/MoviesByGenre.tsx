import React, {FC} from 'react';
import {Pagination} from "@/app/components/pagination/Pagination";
import {movieService} from "@/app/services/movie.service";
import {query} from "@/app/urls/urls";
import Genres from "@/app/components/genresComponents/movieGenresComponent/genres/Genres";
import styles from "@/app/components/moviesAndTVcomponents/movieComponents/movies/movies.style.module.css";
import Movie from "@/app/components/moviesAndTVcomponents/movieComponents/movie/Movie";
import {IMovie} from "@/app/models/IMovie";


type SearchParams = Promise<{[key:string]:string}>
type ParamsId = Promise<{id:string}>
type ParamsProps = {
    searchParams: SearchParams,
    params:ParamsId
}
const MoviesByGenre:FC<ParamsProps> = async ({searchParams,params}) => {
    const page =  await searchParams?? 1;
    const {id} = await params;
    const moviesByGenre = await movieService.movies.getAllMovies(page?.page?.toString(),query.with_genres+id);
    console.log(moviesByGenre);
    return (
        <div>
            <div id={styles.moviesAndGenresHolder}>
                <div id={styles.genreHolder}>
                    <Genres/>
                </div>
                <div id={styles.movies}>{moviesByGenre.results?.map((byGenre:IMovie) =><Movie movie={byGenre} key={byGenre.id}/>)}</div>
            </div>
            <Pagination next={moviesByGenre.next} previous={moviesByGenre.previous}/>
        </div>
    );
};

export default MoviesByGenre;