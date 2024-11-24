import {movieService} from "@/app/services/movie.service";
import {IMovie} from "@/app/models/IMovie";
import Movie from "@/app/components/moviesAndTVcomponents/movieComponents/movie/Movie";
import {Pagination} from "@/app/components/pagination/Pagination";
import React, {FC} from "react";
import styles from './searchMoviesStyle.module.css'
import FormForSearch from "@/app/components/search/formForSearch/FormForSearch";

type SearchParams = Promise<{ [key: string]: string }>
type ParamsProps = {
    searchParams: SearchParams
}
const SearchMovies: FC<ParamsProps> = async ({searchParams}) => {
    const query = await searchParams;
    const page = await searchParams ?? 1;

    const foundMovies =
        await movieService.searchSection.searchMovie(query?.query ? query?.query : 'venom', page?.page?.toString());
    console.log(foundMovies);
    return (
        <div>
            <div id={styles.inputHolder}>
                <FormForSearch/>
            </div>
            <div id={styles.searchMoviesHolder}>
                {foundMovies.results?.map((movie: IMovie) => <Movie movie={movie} key={movie.id}/>)}
            </div>
            <Pagination next={foundMovies.next} previous={foundMovies.previous}/>
        </div>
    );

};

export default SearchMovies;