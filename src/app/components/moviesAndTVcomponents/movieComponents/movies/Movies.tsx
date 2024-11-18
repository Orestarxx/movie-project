import React, {FC} from 'react';
import styles from './movies.style.module.css'
import {movieService} from "@/app/services/movie.service";
import Movie from "@/app/components/moviesAndTVcomponents/movieComponents/movie/Movie";
import {Pagination} from "@/app/components/pagination/Pagination";
import Genres from "@/app/components/genresComponents/movieGenresComponent/genres/Genres";
type SearchParams = Promise<{[key:string]:string}>
type ParamsProps = {
    searchParams: SearchParams
}
const Movies:FC<ParamsProps> = async ({searchParams}) => {
    const page =  await searchParams?? 1;
    const movies = await movieService.movies.getAllMovies(page?.page?.toString())
    console.log(movies);
    return (
        <div id={styles.moviesHolder}>
            <div id={ styles.moviesAndGenresHolder}>
                <div id={styles.genreHolder}>
                    <Genres/>
                </div>
                <div id={styles.movies}>{movies.results?.map((movie) => <Movie key={movie.id} movie={movie}/>)}</div>
            </div>
            <Pagination next={movies?.next} previous={movies?.previous} pageData={movies?.page}/>
        </div>
    );
};

export default Movies;