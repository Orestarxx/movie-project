import React, {FC} from 'react';
import MoviesByGenre from "@/app/components/genresComponent/moviesByGenre/MoviesByGenre";
type SearchParams = Promise<{[key:string]:string}>
type Params = Promise<{id:string}>
type ParamsProps = {
    searchParams: SearchParams,
    params:Params
}
const GenresPage:FC<ParamsProps> =  ({searchParams,params}) => {
    return (
        <div>
            <MoviesByGenre searchParams={searchParams} params={params}/>
        </div>
    );
};

export default GenresPage;