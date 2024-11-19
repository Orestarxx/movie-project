import React from 'react';
import {movieService} from "@/app/services/movie.service";
import styles from "@/app/components/moviesAndTVcomponents/movieComponents/movies/movies.style.module.css";
import Genres from "@/app/components/genresComponents/movieGenresComponent/genres/Genres";
import Movie from "@/app/components/moviesAndTVcomponents/movieComponents/movie/Movie";
import {Pagination} from "@/app/components/pagination/Pagination";
type SearchParams = Promise<{[key:string]:string}>
type ParamsProps = {
    searchParams: SearchParams
}
const PopularMovies = async ({searchParams}:ParamsProps) => {
    const {page} = await searchParams;
    const popular = await movieService.movies.getPopularMovies(page);
    return (
        <div id={styles.moviesHolder}>
            <div id={styles.moviesAndGenresHolder}>
                <div id={styles.genreHolder}>
                    <Genres/>
                </div>
                <div id={styles.movies}>{popular.results?.map((movie) => <Movie key={movie.id} movie={movie}/>)}</div>
                <Pagination next={popular?.next} previous={popular?.previous} pageData={popular?.page}/>
            </div>
        </div>
    );
};

export default PopularMovies;