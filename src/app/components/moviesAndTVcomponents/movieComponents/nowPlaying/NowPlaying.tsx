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
const NowPlaying = async ({searchParams}:ParamsProps) => {
    const {page} = await searchParams?? 1;
     const nowPlaying = await movieService.movies.getNowPlaying(page.toString())
    console.log(nowPlaying);
    return (
        <div id={styles.moviesHolder}>
            <div id={styles.moviesAndGenresHolder}>
                <div id={styles.genreHolder}>
                    <Genres/>
                </div>
                <div id={styles.movies}>{nowPlaying.results?.map((movie) => <Movie key={movie.id} movie={movie}/>)}</div>
                <Pagination next={nowPlaying?.next} previous={nowPlaying?.previous} pageData={nowPlaying?.page}/>
            </div>
        </div>
    );
};

export default NowPlaying;