import React, {FC} from 'react';
import {Pagination} from "@/app/components/pagination/Pagination";
import {movieService} from "@/app/services/movie.service";
type SearchParams = Promise<{[key:string]:string}>
type ParamsProps = {
    searchParams: SearchParams
}

const MoviesPage:FC<ParamsProps> = async ({searchParams}) => {
    const page =  await searchParams?? 1;
    const movies = await movieService.movies.getAllMovies(page?.page?.toString())
    console.log(movies);
    return (
        <div>
            {movies.results.map((movie) =><div key={movie.id}>{movie.original_title}</div>)}
            <Pagination next={movies?.next} previous={movies?.previous}/>
        </div>
    );
};

export default MoviesPage;