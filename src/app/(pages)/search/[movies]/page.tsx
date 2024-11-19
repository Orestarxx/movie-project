import React, {FC} from 'react';
import SearchMovies from "@/app/components/search/searchMovies/SearchMovies";
type SearchParams = Promise<{[key:string]:string}>
type ParamsProps = {
    searchParams: SearchParams
}

const SearchPage:FC<ParamsProps> = async ({searchParams}) => {

    return (
        <div>
           <SearchMovies searchParams={searchParams}/>
        </div>
    );
};

export default SearchPage;