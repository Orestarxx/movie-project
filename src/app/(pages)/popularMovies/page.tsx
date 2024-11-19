import React from 'react';
import PopularMovies from "@/app/components/moviesAndTVcomponents/movieComponents/popularMovies/PopularMovies";
type SearchParams = Promise<{[key:string]:string}>
type ParamsProps = {
    searchParams: SearchParams
}
const PopularMoviesPage = ({searchParams}:ParamsProps) => {
    return (
        <div>
            <PopularMovies searchParams={searchParams}/>
        </div>
    );
};

export default PopularMoviesPage;