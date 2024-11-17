import {movieService} from "@/app/services/movie.service";
import {IMovie} from "@/app/models/IMovie";
import Movie from "@/app/components/movieComponents/movie/Movie";
import {Pagination} from "@/app/components/pagination/Pagination";
import React, {FC} from "react";

type SearchParams = Promise<{[key:string]:string}>
type ParamsProps = {
    searchParams: SearchParams
}
const SearchMovies:FC<ParamsProps> =  async ({searchParams}) => {
    const query = await searchParams;
    const page =  await searchParams?? 1;

    const foundMovies = await movieService.searchSection.searchMovie(query?.query,page?.page?.toString());
    console.log(foundMovies);
    return (
        <div>
            {foundMovies.results?.map((movie:IMovie) =><Movie movie={movie} key={movie.id}/>)}
            <Pagination next={false} previous={false}/>
        </div>
    );

};

export default SearchMovies;