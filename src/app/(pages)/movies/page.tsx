import React from 'react';
import {Pagination} from "@/app/components/pagination/Pagination";
type SearchParams = Promise<{[key:string]:string|string[]|undefined}>
type MovieProps = {
    searchParams:SearchParams
}

const MoviesPage = async ({searchParams}:{searchParams:MovieProps}) => {
    const page = await searchParams?? 1;
    console.log(page);
    return (
        <div>
            movies
            <Pagination next={false} previous={true}/>
        </div>
    );
};

export default MoviesPage;