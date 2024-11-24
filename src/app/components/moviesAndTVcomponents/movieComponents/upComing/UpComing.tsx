import React from 'react';
import {movieService} from "@/app/services/movie.service";
import styles from "@/app/components/moviesAndTVcomponents/movieComponents/movies/movies.style.module.css";
import Genres from "@/app/components/genresComponents/movieGenresComponent/genres/Genres";
import Movie from "@/app/components/moviesAndTVcomponents/movieComponents/movie/Movie";
import {Pagination} from "@/app/components/pagination/Pagination";

type SearchParams = Promise<{ [key: string]: string }>
type ParamsProps = {
    searchParams: SearchParams
}
const UpComing = async ({searchParams}: ParamsProps) => {
    const {page} = await searchParams;
    const upComing = await movieService.movies.getUpcoming(page)
    console.log(upComing);
    return (
        <div id={styles.moviesHolder}>
            <div id={styles.moviesAndGenresHolder}>
                <div id={styles.genreHolder}>
                    <Genres/>
                </div>
                <div id={styles.movies}>{upComing.results?.map((movie) => <Movie key={movie.id} movie={movie}/>)}</div>
                <Pagination next={upComing?.next} previous={upComing?.previous} pageData={upComing?.page}/>
            </div>
        </div>
    );
};

export default UpComing;