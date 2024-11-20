import React from 'react';
import TopRated from "@/app/components/moviesAndTVcomponents/movieComponents/topRated/TopRated";
type SearchParams = Promise<{[key:string]:string}>
type ParamsProps = {
    searchParams: SearchParams
}
const TopRatedMoviesPage = ({searchParams,}:ParamsProps) => {
    return (
        <div>
            <TopRated searchParams={searchParams}/>
        </div>
    );
};

export default TopRatedMoviesPage;