import React, {FC} from 'react';
import {movieService} from "@/app/services/movie.service";
import styles from "@/app/components/moviesAndTVcomponents/movieComponents/movies/movies.style.module.css";
import Genres from "@/app/components/genresComponents/movieGenresComponent/genres/Genres";
import Movie from "@/app/components/moviesAndTVcomponents/movieComponents/movie/Movie";
import {Pagination} from "@/app/components/pagination/Pagination";

type SearchParams = Promise<{ [key: string]: string }>
type ParamsProps = {
    searchParams: SearchParams
}
const TopRated: FC<ParamsProps> = async ({searchParams}) => {
    const params = await searchParams;
    const topRated = await movieService.movies.getTopRated(params?.page.toString());
    console.log(topRated);
    return (
        <div id={styles.moviesHolder}>
            <div id={styles.moviesAndGenresHolder}>
                <div id={styles.genreHolder}>
                    <Genres/>
                </div>
                <div id={styles.movies}>{topRated.results?.map((movie) => <Movie key={movie.id} movie={movie}/>)}</div>
                <Pagination next={topRated?.next} previous={topRated?.previous} pageData={topRated?.page}/>
            </div>
        </div>
    );
};

export default TopRated;