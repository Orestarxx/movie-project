import React from 'react';
import SearchMovies from "@/app/components/search/searchMovies/SearchMovies";
type SearchParams = Promise<{[key:string]:string}>
type ParamsProps = {
    searchParams: SearchParams
}
const SearchMoviePage = ({searchParams}:ParamsProps) => {
    return (
        <div>
            <SearchMovies searchParams={searchParams}/>
        </div>
    );
};

export default SearchMoviePage;